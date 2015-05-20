'use strict';

var CC = require('chemcalc');
var PEP = require('peptide');
var MfProcessor = exports.MfProcessor = require('./MfProcessor');

var CE = exports;

CE.analyseMF = CC.analyseMF;
CE.getInfo = CC.getInfo;
CE.mfFromMonoisotopicMass = CC.mfFromMonoisotopicMass;

/*
 mfFromMonoisotopicMassSimilarity
 We will extend mfFromMonoisotopicMass in order to include in the options:
 * experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
 * widthTop : top width of the trapezoid
 * widthBottom : bottom width of the trapezoid
 * from : mass "from" which calculate the similarity
 * to : mass "to" which calculate the similarity
 * As an alternative the from / to parameters can be calculated based target mass
 *
 * decimalsPPM : number of decimals for PPM
 * decimalsMass : number odecimals for the mass
 */
CE.mfFromMonoisotopicMassSimilarity = function (mass, experimental, options) {
    var mfResults = CC.mfFromMonoisotopicMass(mass, options);

    var processor = new MfProcessor(experimental, options);


    var results = mfResults.results;
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        processor.process(result.mf.value, result);
    }
    mfResults.extractExperimental = processor.similarity.getExtract1();
    return mfResults;
};


CE.matchMFs = function (mfsArray, experimental, options) {
    options = options || {};
    options.addExperimentalExtract = true;
    options.maxResults = options.maxResults || 500;
    options.minSimilarity = (isNaN(options.minSimilarity)) ? 50 : options.minSimilarity;

    var processor = new MfProcessor(experimental, options);
    var mfs = CE.combineMFs(mfsArray);

    var results = [];
    for (var i = 0; i < mfs.length; i++) {
        var result = processor.process(mfs[i].mf);
        results.push(result);
        result.parts = mfs[i];
        if (results.length > options.maxResults * 2) {
            results = CE.bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
        }
    }
    results = CE.bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
    return {options: options, results: results};
};

/* we have 2 criteria to find the best results
 1. best match per zone based on the bestOf parameter
 2. maxResults : maximal number of results
 */
CE.bestResults = function (results, bestOf, maxResults, minSimilarity) {
    var newResults = [];

    // in order to find the bestOf we will sort by similarity and take all of them for which there is nothing in a range
    // of the bestOf range

    results.sort(function (a, b) {
        return b.similarity - a.similarity;
    });

    if (minSimilarity) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].similarity < minSimilarity) {
                results = results.slice(0, i);
                break;
            }
        }
    }

    if (bestOf) {
        for (var i = 0; i < results.length && newResults.length < maxResults; i++) {
            for (var j = 0; j < newResults.length; j++) {
                if (Math.abs(newResults[j].msem - results[i].msem) < (bestOf / (results[i].charge || 1))) {
                    break;
                }
            }
            if (j == newResults.length) {
                newResults.push(results[i]);
            }
        }
    } else {
        newResults = results.slice(0, maxResults);
    }

    return newResults;
};


CE.getEutrophicationPotential = function (mf) {
    var chemcalc = CC.analyseMF(mf);
    var atoms = chemcalc.parts[0].ea;
    var mw = chemcalc.mw;
    var nC = 0, nO = 0, nN = 0, nP = 0, nH = 0;
    for (var i = 0; i < atoms.length; i++) {
        var atom = atoms[i];
        switch (atom.element) {
            case 'C':
                nC = atom.number;
                break;
            case 'N':
                nN = atom.number;
                break;
            case 'O':
                nO = atom.number;
                break;
            case 'H':
                nH = atom.number;
                break;
            case 'P':
                nP = atom.number;
                break;
            default:
                return {log: 'EP can not be calculated because the MF contains the element: ' + atom.element};
        }
    }

    var vRef = 1;
    var mwRef = 94.97;

    var thOD = nC + (nH - 3 * nN) / 4 - nO / 2;
    var v = nP + nN / 16 + thOD / 138;
    var ep = (v / mw) / (vRef / mwRef);

    return {
        v: v,
        thOD: thOD,
        ep: ep,
        mf: {type: 'mf', value: mf},
        mw: chemcalc.mw,
        log: 'Successful calculation'
    };
};


CE.convertAASequence = function (sequence) {
    return PEP.convertAASequence(sequence);
}

CE.chargePeptide = function (sequence) {
    return PEP.chargePeptide(sequence);
}


CE.generatePeptideFragments = function (sequence, options) {
    return PEP.generatePeptideFragments(sequence, options);
}

CE.combineMFs = function (keys) {
    function appendResult(results, currents, keys) {
        // this script is designed to combine molecular formula
        // that may contain comments after a "$" sign
        // therefore we should put all the comments at the ned
        var result = {mf: ''};
        var comments = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i][currents[i]];
            if (key) {
                result['part' + (i + 1)] = key;
                if (key.indexOf('$') > -1) {
                    comments.push(key.replace(/^[^$]*\$/, ''));
                    key = key.replace(/\$.*/, '');
                }
                result.mf += key;
            }
        }

        if (comments.length > 0) result.mf += '$' + comments.join(' ');

        results.push(result);
    }

    if (!Array.isArray(keys)) return [];
    if (!Array.isArray(keys[0])) keys = [keys];
    var results = [];
    var sizes = new Array(keys.length);
    var currents = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
        sizes[i] = keys[i].length - 1;
        currents[i] = 0;
    }
    var position = 0;
    var evolution = 0;

    while (position < currents.length) {
        if (currents[position] < sizes[position]) {
            evolution++;
            appendResult(results, currents, keys);
            currents[position]++;
            for (var i = 0; i < position; i++) {
                currents[i] = 0;
            }
            position = 0;
        } else {
            position++;
        }
    }
    appendResult(results, currents, keys);
    return results;
};

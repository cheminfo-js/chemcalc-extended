'use strict';

var CC = require('chemcalc');
var PEP = require('peptide');

var bestResults = exports.bestResults = require('./bestResults');
var MFProcessor = exports.MFProcessor = require('./MFProcessor');
var getPubchemStats = require('./getPubchemStats');
var mfFromMonoisotopicMassPubchemPromise = require('./mfFromMonoisotopicMassPubchemPromise');

exports.getContaminantsReferenceList = require('./getContaminantsReferenceList');
exports.getReferenceList = require('./getReferenceList');

exports.combineMFs = require('./combineMFs');
exports.SimilarityProcessor = require('./SimilarityProcessor');
exports.MFSimilarityProcessor = require('./MFSimilarityProcessor');
var massPeakPicking = require('./massPeakPicking');

if (typeof self !== 'undefined') {
    exports.MFProcessorWorker = require('./MFProcessorWorker');
}

var CE = exports;

CE.analyseMF = require('./analyseMF');
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
// TODO : May not be moved (and create it's own file) because it also has to work inside a worker !!!!!
CE.mfFromMonoisotopicMassSimilarity = function mfFromMonoisotopicMassSimilarity (mass, experimental, options) {
    var mfResults = CC.mfFromMonoisotopicMass(mass, options);
    var processor = new MFProcessor(experimental, options);

    var results = mfResults.results;
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        processor.process(result.mf.value || result.mf, result);
    }
    mfResults.extractExperimental = processor.similarity.getExtract1();

    mfResults.results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
    return mfResults;
};


CE.pubchemStats={};
CE.getPubchemStats=function (id) {
    id = id || '25_C-H.C-N.C-O.C-S.C-P.C-FClBr.O-P.O-S.CCNP-HFClBr';
    if (CE.pubchemStats[id]) return Promise.resolve(CE.pubchemStats[id]);
    return getPubchemStats(id).then(function(value) {
        CE.pubchemStats[id]=value;
        return value;
    });
};

CE.mfFromMonoisotopicMassPubchemPromise = function (mass, options) {
    return CE.getPubchemStats().then( function(pubchemStats) {
        return mfFromMonoisotopicMassPubchemPromise(mass, pubchemStats, options);
    });
}

CE.matchMFs = function (mfsArray, experimental, options) {
    options = options || {};
    options.addExperimentalExtract = true;
    options.maxResults = options.maxResults || 500;
    options.minSimilarity = (isNaN(options.minSimilarity)) ? 50 : options.minSimilarity;

    var processor = new MFProcessor(experimental, options);
    var mfs = CE.combineMFs(mfsArray);

    var results = [];
    for (var i = 0; i < mfs.length; i++) {
        var result = processor.process(mfs[i].mf);
        results.push(result);
        result.parts = mfs[i];
        if (results.length > options.maxResults * 2) {
            results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
        }
    }
    results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
    return {options: options, results: results};
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


CE.convertAASequence = PEP.convertAASequence;

CE.chargePeptide = PEP.chargePeptide;

CE.generatePeptideFragments = PEP.generatePeptideFragments;

CE.splitPeptide = PEP.splitPeptide;

CE.digestPeptide = PEP.digestPeptide;

CE.massPeakPicking = massPeakPicking;

CE.allowNeutralLoss = PEP.allowNeutralLoss
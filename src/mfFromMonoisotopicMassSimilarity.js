'use strict';

var CC = require('chemcalc');
var MFProcessor = exports.MFProcessor = require('./MFProcessor');
var bestResults = exports.bestResults = require('./bestResults');

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
function mfFromMonoisotopicMassSimilarity (mass, experimental, options) {
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

module.exports=mfFromMonoisotopicMassSimilarity;

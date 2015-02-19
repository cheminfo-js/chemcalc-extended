'use strict';


var CC = require("chemcalc");
var Similarity = require("peaks-similarity");

module.exports = function() {};

var CE=module.exports;

CE.analyseMF=CC.analyseMF;
CE.getInfo=CC.getInfo;


/*
We will extentend mfFromMonoisotopicMass in order to include in the options:
* experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
* widthTop : top width of the trapezoid
* widthBottom : bottom width of the trapezoid
* from : mass "from" which calculate the similarity
* to : mass "to" which calculate the similarity
* decimalsPPM : number of decimals for PPM
* decimalsMass : number odecimals for the mass
 */

CE.mfFromMonoisotopicMass = function(mass, options) {
    var factorPPM, factorMass;
    if (! options) throw "Options are mandatory";
    if (! options.experimental) throw "You need to have an experimental list of peaks in options.experimental";

    var mfResults = CC.mfFromMonoisotopicMass(mass, options);
    var similarity=new Similarity({widthTop: options.widthTop, widthBottom: options.widthBottom});
    similarity.setFromTo(options.from, options.to);
    similarity.setPeaks1(options.experimental);

    var results=mfResults.results;

    if (options.decimalsPPM) var factorPPM=Math.pow(10,options.decimalsPPM);
    if (options.decimalsMass) var factorMass=Math.pow(10,options.decimalsMass);

    // we could improve a little bit the result ...
    for (var i=0; i<results.length; i++) {
        var result=results[i];
        if (factorPPM) result.ppm=Math.round(result.ppm*factorPPM)/factorPPM;
        if (factorMass) result.em=Math.round(result.em*factorMass)/factorMass;

        similarity.setPeaks2(CC.analyseMF(result.mf.value, {isotopomers:"array"}).spectrum);
        var similarityResult=similarity.getSimilarity();

        result.extract=similarityResult.extract2;
        result.diff=similarityResult.diff;
        result.similarity=Math.floor(similarityResult.similarity*1e4)/1e2;
        result.color="hsla("+Math.round(similarityResult.similarity*120)+",100%,60%,0.6)";
    }
    mfResults.extractExperimental=similarity.getExtract1();
    return mfResults;
}


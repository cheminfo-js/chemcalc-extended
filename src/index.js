'use strict';


var CC = require("chemcalc");
var Similarity = require("peaks-similarity");


var CE=exports;

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

CE.getEutrophicationPotential=function(mf) {
    var chemcalc=CC.analyseMF(mf);
    var atoms=chemcalc.parts[0].ea;
    var mw=chemcalc.mw;
    var nC=0, nO=0, nN=0, nP=0, nH=0;
    for (var i=0; i<atoms.length; i++) {
        var atom=atoms[i];
        switch(atom.element) {
            case "C":
                nC=atom.number;
                break;
            case "N":
                nN=atom.number;
                break;
            case "O":
                nO=atom.number;
                break;
            case "H":
                nH=atom.number;
                break;
            case "P":
                nP=atom.number;
                break;
            default:
                return {log:"EP can not be calculated because the MF contains the element: "+atom.element}
        }
    }

    var vRef=1;
    var mwRef=94.97;

    var thOD = nC + (nH-3*nN)/4 - nO/2;
    var v = nP + nN/16 + thOD/138;
    var ep = (v / mw) / (vRef / mwRef)

    return {
        v: v,
        thOD: thOD,
        ep: ep,
        mf: {type:"mf", value:mf},
        mw: chemcalc.mw,
        log:"Successful calculation"
    }
}

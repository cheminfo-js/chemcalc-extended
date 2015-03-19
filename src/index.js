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
* As an alternative the from / to parameters can be calculated based target mass
*
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
        processMF(result, similarity, result.mf.value, options);
        if (factorPPM) result.ppm=Math.round(result.ppm*factorPPM)/factorPPM;
        if (factorMass) result.em=Math.round(result.em*factorMass)/factorMass;
     }
    mfResults.extractExperimental=similarity.getExtract1();
    return mfResults;
}


CE.matchMFs = function(mfsArray, experimental, options) {
    var factorPPM, factorMass;
    options=options||{};
    options.addExperimentalExtract=true;
    var similarity=new Similarity({widthTop: options.widthTop, widthBottom: options.widthBottom});
    similarity.setPeaks1(experimental);

    var mfs=CE.combineMFs(mfsArray);

    if (options.decimalsMass) var factorMass=Math.pow(10,options.decimalsMass);

    var results=[];
    for (var i=0; i<mfs.length; i++) {
        console.log("Analysing: "+(i+1)+"/"+mfs.length+" ("+mfs[i]+")");
        var result={};
        results.push(result);
        processMF(result, similarity, mfs[i], options);
        if (factorMass) result.em=Math.round(result.em*factorMass)/factorMass;
    }

    return {options: options, results:results};
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


CE.combineMFs=function (keys) {
    function appendResult(results, currents, keys) {
        // this script is designed to combine molecular formula
        // that may contain comments after a "$" sign
        // therefore we should put all the comments at the ned
        var result="";
        var comments=[];
        for (var i=0; i<keys.length; i++) {
            var key=keys[i][currents[i]];
            if (key.indexOf("$")>-1) {
                comments.push(key.replace(/^[^$]*\$/,""));
                key=key.replace(/\$.*/,"");
            }
            result+=key;
        }
        if (comments.length>0) result+="$"+comments.join(" ");
        results.push(result);
    }

    if (! Array.isArray(keys)) return [];
    if (! Array.isArray(keys[0])) keys=[keys];
    var results=[];
    var sizes=new Array(keys.length);
    var currents=new Array(keys.length);
    for (var i=0; i<keys.length; i++) {
        sizes[i]=keys[i].length-1;
        currents[i]=0;
    }
    var position=0;
    var evolution=0;

    while (position<currents.length) {
        if (currents[position]<sizes[position]) {
            evolution++;
            appendResult(results, currents, keys);
            currents[position]++;
            for (var i=0; i<position; i++) {
                currents[i]=0;
            }
            position=0;
        } else {
            position++;
        }
    }
    appendResult(results, currents, keys);
    return results;
}


function processMF(result, similarity, mf, options) {
    options=options || {};
    options.isotopomers="array";
    var ccResult=CC.analyseMF(mf, options);

    var from, to;
    if (options.from && options.to) {
        from=options.from
        to=options.to;
    } else {
        var charge=Math.abs(ccResult.parts[0].charge || 1);
        options.zone = options.zone || {};
        if (!options.zone.low) options.zone.low = -0.5;
        if (!options.zone.high) options.zone.high = 4.5;

        var target=ccResult.parts[0].msem || ccResult.parts[0].em;
        from=target+options.zone.low/charge;
        to=target+options.zone.high/charge;
    }

    similarity.setFromTo(from, to);
    similarity.setPeaks2(ccResult.spectrum);

    var similarityResult=similarity.getSimilarity();


    if (! result.em) result.em=ccResult.em;
    if (! result.info) result.info=mf;
    if (! result.mf) result.mf=ccResult.mf;
    if (! result.charge) result.charge=ccResult.parts[0].charge;
    result.fromTo={from: from, to:to};
    result.extract=similarityResult.extract2;
    result.diff=similarityResult.diff;
    result.similarity=Math.floor(similarityResult.similarity*1e4)/1e2;
    result.color="hsla("+Math.round(similarityResult.similarity*120)+",100%,60%,0.6)";
    if (options.addExperimentalExtract) result.extractExperimental=similarityResult.extract1;
}


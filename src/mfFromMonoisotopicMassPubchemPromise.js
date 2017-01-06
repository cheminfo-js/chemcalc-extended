'use strict';

var CC = require('chemcalc');
var MFProcessor = exports.MFProcessor = require('./MFProcessor');
var bestResults = exports.bestResults = require('./bestResults');

/*
 mfFromMonoisotopicMassPubchem
 We will extend mfFromMonoisotopicMass in order to deal with pubchem statistics:
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
function mfFromMonoisotopicMassPubchemPromise (mass, pubchemStats, options) {
    var mfResults = CC.mfFromMonoisotopicMass(mass, options);
    // retrieve the statistics depending the mass
    var stats=getStatsForMass(mass, pubchemStats.allStats).stats;
    var results = mfResults.results;
    for (var i=0; i<results.length; i++) {
        var result=results[i];
        result.rank = i+1;
        result.absppm=Math.abs(result.ppm);
        result.pubchem = {};
        addAtoms(result);
        addRatios(result, stats);
        addRatiosScore(result, stats);
    }
    return mfResults;
}



function addAtoms(result) {
    var mf=result.mf;
    var parts=mf.split(/(?=[A-Z])/);
    var atoms={};
    for (var part of parts) {
        var label=part.replace(/[0-9]/g,'');
        var number=part.replace(/[^0-9]/g,'')*1 || 1;
        atoms[label]=number;
    }
    result.atoms=atoms;
}


function addRatios(result, stats) {
    var ratios = result.pubchem.ratios={};

    for (var j=0; j < stats.length; j++) {
        var stat=stats[j];
        var kind=stat.kind;
        var sd=stat.standardDeviation;
        var mean=stat.mean;
        var topAtoms = kind.split("/")[0];
        var bottomAtoms = kind.split("/")[1];
        var topAtomsArray = topAtoms.split(/(?=[A-Z])/);
        var bottomAtomsArray = bottomAtoms.split(/(?=[A-Z])/);
        var top=getSumAtoms(topAtomsArray, result.atoms);
        var bottom=getSumAtoms(bottomAtomsArray, result.atoms);
        if (top!==0 && bottom!==0) {
            var ratio=Math.log2(top/bottom);
            ratios[kind]={
                sparkline: [-8,
                    mean-3*sd,mean-3*sd, mean,
                    mean+3*sd, mean+3*sd, 8],
                options: {
                    "type": "box",
                    "raw": false,
                    "boxLineColor": "lightgrey",
                    "boxFillColor": "lightgrey",
                    "whiskerColor": "rgba(0,0,0,0)",
                    "medianColor": "black",
                    "lineColor": "grey",
                    "target": ratio+0.0000001,
                    "targetColor": "red"
                },
                value: ratio
            };
        }
    }
}


function getStatsForMass(targetMass, allStats) {
    for (var stats of allStats) {
        if (targetMass >= stats.minMass && targetMass < stats.maxMass)
            return stats;
    }
}

function getSumAtoms(atoms, mf) {
    var sum = 0;
    for(var k=0; k < atoms.length; k++) {
        if (mf[atoms[k]]) sum += mf[atoms[k]];
    }
    return sum;
}


function addRatiosScore(result, stats) {
    var score = 1;
    var ratios = result.pubchem.ratios;
    var total = 0;
    for (var i=0; i < stats.length; ++i) { // For all the MF in stats
        var kind = stats[i].kind;
        var ratio=ratios[kind];
        var mean = stats[i].mean;
        var sd = stats[i].standardDeviation;

        if (ratio) {
            var currentRatio = ratio.value;
            if (currentRatio!==0) {
                total++;
                var distance = Math.abs(currentRatio-mean) / sd;
                var currentScore=Math.pow(0.8, distance);
                score*=currentScore;
            }
            ratios[kind].score=currentScore;
        }
    }
    result.pubchem.score=Math.pow(score, 1/total);
}


module.exports=mfFromMonoisotopicMassPubchemPromise;

'use strict';

var CC = require('chemcalc');
var removeMFLastPart = require('./util/removeMFLastPart.js');


// TODO replace from the value coming from chemcalc
var ELECTRON_MASS=5.4857990946e-4;

function combineMFs (keys, options) {
    var options=options || {};
    options.limit=options.limit || 100000;
    if (!Array.isArray(keys)) return [];


    // we allow String delimited by ". , or ;" instead of an array
    for (var i = 0; i < keys.length; i++) {
        if (!Array.isArray(keys[i])) {
            keys[i] = keys[i].split(/[\.,;]/);
        }
    }

    // we allow ranges in a string ...
    // problem with ranges is that we need to now to what the range applies
    for (var i = 0; i < keys.length; i++) {
        var parts=keys[i];
        var newParts=[];
        for (var j=0; j<parts.length; j++) {
            var part=parts[j];
            var comment=part.replace(/^([^$]*\$|.*)/, '');
            part = part.replace(/\$.*/, '');

            if (~part.indexOf('-')) { // there are ranges ... we are in trouble !
                newParts=newParts.concat(processRange(part,comment));
            } else {
                newParts.push(parts[j]); // the part with the comments !
            }
        }
        keys[i]=newParts;
    }

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
        if (evolution>options.limit) {
            throw new Error('You have reached the limit of '+options.limit+'. You could still change this value using options.limit but it is likely to crash.');
        }
    }
    appendResult(results, currents, keys);
    return results;
}

module.exports = combineMFs;

var ems={};

function getEM(mf) {
    if (! ems[mf]) {
        // we need to calculate based on the mf
        var info=CC.analyseMF(mf);
        ems[mf]={
            em: info.em,
            charge: info.parts[0].charge || 0
        }
    }
    return {
        em: ems[mf].em,
        charge: ems[mf].charge
    }
}

function getEMFromParts(parts, currents) {
    var charge=0;
    var em=0;

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i][currents[i]];
        if (part) {
            var info=getEM(part);
            charge+=info.charge;
            em+=info.em;
        }
    }
    var msem=em;
    if (charge>0) {
        msem=msem/charge-ELECTRON_MASS;
    } else if (charge<0) {
        msem=msem/(charge*-1)+ELECTRON_MASS;
    } else {
        msem=0;
    }
    return {
        charge: charge,
        em: em,
        msem: msem
    }
}

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
        var info=getEMFromParts(keys, currents);
        result.em=info.em;
        result.msem=info.msem;
        result.charge=info.charge;
    }

    if (comments.length > 0) result.mf += '$' + comments.join(' ');

    results.push(result);
}

function processRange(string, comment) {
    var results=[];
    var parts=string.split(/([0-9]+-[0-9]+)/).filter(function(value) { if (value) return value });
    var position=-1;
    var mfs=[];
    for (var i=0; i<parts.length; i++) {
        var part=parts[i];
        if (!~part.search(/[0-9]-[0-9]/)) {
            position++;
            mfs[position]={
                mf:part,
                min:1,
                max:1
            }
        } else {
            mfs[position].min=part.replace(/^(-?[0-9]*)-(-?[0-9]*)/,"$1")>>0;
            mfs[position].max=part.replace(/^(-?[0-9]*)-(-?[0-9]*)/,"$2")>>0;
        }
    }

    var currents = new Array(mfs.length);
    for (var i = 0; i < currents.length; i++) {
        currents[i] = mfs[i].min;
    }
    var position = 0;
    while (position < currents.length) {
        if (currents[position] < mfs[position].max) {
            results.push(getMF(mfs, currents, comment));
            currents[position]++;
            for (var i = 0; i < position; i++) {
                currents[i] = mfs[i].min;
            }
            position = 0;
        } else {
            position++;
        }
    }
    results.push(getMF(mfs, currents, comment));
    return results;
}

function getMF(mfs, currents, comment) {
    var mf="";
    for (var i=0; i<mfs.length; i++) {
        if (currents[i]===0) {
            // TODO we need to remove from currents[i] till we reach another part of the MF
            mf+=removeMFLastPart(mfs[i].mf);
        } else {
            mf+=mfs[i].mf;
            if (currents[i]!==1) {
                mf+=currents[i];
            }
        }
    }
    if (comment) mf+="$"+comment;
    return mf;
}



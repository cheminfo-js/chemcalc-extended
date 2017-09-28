'use strict';

module.exports = analyseMF;
var CC = require('chemcalc');


function analyseMF(mf, options) {
    var result=CC.analyseMF(mf, options);
    var atoms={};
    result.atoms=atoms;
    for (var part of result.parts) {
        for (var atom of part.ea) {
            if (! atoms[atom.element]) {
                atoms[atom.element]=0;
            }
            atoms[atom.element]+=atom.number*part.number;
        }
    }

    if (result.parts.length>1) {
        var totalMF=[];
        for (var atom of Object.keys(result.atoms)) {
            var number=result.atoms[atom];
            totalMF.push(atom+((number!==1) ? number : '') );
        }
        result.totalMF=totalMF.join('');
    }

    return result;
};

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
            atoms[atom.element]+=atom.number;
        }
    }
    return result;
};

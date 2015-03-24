'use strict';

var CE = require('..');


var mfsArray=[["C","H"],[],[""],["Cl","Br"]];

var result=CE.combineMFs(mfsArray);

console.log(result[0]);

describe('combine MFstest', function () {
    it('Check result', function () {
        result[0].mf.should.equal('CCl');
        result.length.should.equal(4);
    });
});




'use strict';

var CE = require('..');


var mfsArray=[["C","H$YY"],[],[""],["Cl","Br$XX"]];

var result=CE.combineMFs(mfsArray);

console.log(result);

describe('combine MFstest', function () {
    it('Check result', function () {
        result[0].mf.should.equal('CCl');
        result.length.should.equal(4);
    });
});


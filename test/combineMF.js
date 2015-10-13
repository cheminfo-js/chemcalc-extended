'use strict';

var CE = require('..');


var mfsArray=[["C","H$YY"],[],[""],["Cl","Br$XX"]];
var result=CE.combineMFs(mfsArray);

describe('combine MFs test', function () {
    it('From array of array with comment', function () {
        var mfsArray=[["C","H$YY"],[],[""],["Cl","Br$XX"]];
        var result=CE.combineMFs(mfsArray);

        result[0].mf.should.equal('CCl');
        result.length.should.equal(4);
    });

    it('From array of string with comment', function () {
        var mfsArray=["C.H.O","+,++",['Cl','Br$XX']];
        var result=CE.combineMFs(mfsArray);
        result[0].mf.should.equal('C+Cl');
        result.length.should.equal(12);
    });

});


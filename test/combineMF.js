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


    it('From array of string with some range', function () {
        var mfsArray=["C1-3N0-2Cl0-0BrO1-1.C2-3H3-4",['C','O']];
        var result=CE.combineMFs(mfsArray);
        result[0].mf.should.equal('CBrOC');
        result.length.should.equal(26);
    });

    it('From array of string chem em and msem', function () {
        var mfsArray=["C0-2.O",['+','-','++','--']];
        var result=CE.combineMFs(mfsArray);
        result[0].mf.should.equal('+');
        result[0].charge.should.equal(1);
        result.length.should.equal(16);
    });


});


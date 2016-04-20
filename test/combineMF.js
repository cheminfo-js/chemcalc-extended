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


    it('From array of string with some range and non range', function () {
        var mfsArray=['CN0-2'];
        var result=CE.combineMFs(mfsArray);
        console.log(result);
        result[0].mf.should.equal('C');
        result[1].mf.should.equal('CN');
        result[2].mf.should.equal('CN2');
        result.length.should.equal(3);
    });

    it('From array of string with some range and non range', function () {
        var mfsArray=['CN0-2O00-1K'];
        var result=CE.combineMFs(mfsArray);
        console.log(result);
        result[0].mf.should.equal('CK');
        result[1].mf.should.equal('CNK');
        result[2].mf.should.equal('CN2K');
        result[3].mf.should.equal('COK');
        result[4].mf.should.equal('CNOK');
        result[5].mf.should.equal('CN2OK');
        result.length.should.equal(6);
    });

    it('From array of string with some range and non range', function () {
        var mfsArray=['C(Me(N2))0-2(CH3)0-1K'];
        var result=CE.combineMFs(mfsArray);
        result[0].mf.should.equal('CK');
        result[1].mf.should.equal('C(Me(N2))K');
        result[2].mf.should.equal('C(Me(N2))2K');
        result[3].mf.should.equal('C(CH3)K');
        result[4].mf.should.equal('C(Me(N2))(CH3)K');
        result[5].mf.should.equal('C(Me(N2))2(CH3)K');
        result.length.should.equal(6);
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


    it('From array of string to large array', function () {
        var mfsArray=["C0-100","O0-100"];
        var result=CE.combineMFs(mfsArray);
        result.length.should.equal(101*101);
    });

    it('Strange comments', function () {
        var mfsArray=["C$1>10","O$D2>20"];
        var result=CE.combineMFs(mfsArray);
        result[0].mf.should.equal('CO$1>10 D2>20');
    });

});


'use strict';

var CE = require('..');




describe('enumerate MFs test', function () {
    it('simple case', function () {
        var result=CE.enumerateMFs('H(Cys|Ala)1-4OH');
        result.length.should.equal(2);
        result[0].mf.should.equal('H(Cys)1-4OH');
        result[1].mf.should.equal('H(Ala)1-4OH');
    });

    it('advanced case', function () {
        var result=CE.combineMFs("H(Cys|Ala)1-4Cys(H-1SMe|H-1(Cl|Br))OH");
        result.length.should.equal(6);
        result.mf.sort().should.eql(
            [
                'H(Cys)1-4Cys(H-1SMe)OH',
                'H(Cys)1-4Cys(H-1(Cl))OH',
                'H(Cys)1-4Cys(H-1(Br))OH',
                'H(Ala)1-4Cys(H-1SMe)OH',
                'H(Ala)1-4Cys(H-1(Cl))OH',
                'H(Ala)1-4Cys(H-1(Br))OH'
            ]);

    });


});


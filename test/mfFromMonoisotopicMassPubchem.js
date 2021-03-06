'use strict';

var CE = require('..');


describe('Test mfFromMonoisotopicMassPubchem', function () {
    it('Check the result', function () {
        this.timeout(10000);

        var options={
            mfRange: 'C0-50 H0-100 O0-10 N0-10',
            minUnsaturation: 0,
            maxUnsaturation: 20,
            useUnsaturation: true,
            integerUnsaturation: true,
            massRange: 0.005
        };
        var targetMass=200.123;
        
        return CE.mfFromMonoisotopicMassPubchemPromise(targetMass, options).then(function(result) {
            var mfs=result.results;
            mfs.length.should.equal(3);
            mfs[0].mf.should.equal('C4H12N10');
        });
    });
});


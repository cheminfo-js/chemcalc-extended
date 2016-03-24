'use strict';

var CE = require('..');


describe('Test getContaminantReference', function () {
    it('Check the json', function () {
        this.timeout(20000);
        return CE.getContaminantsReferenceList().then(function(result) {
            result.length.should.be.above(1000);
            result[0].em.should.be.above(190);
            result[0].charge.should.be.equal(1);
        });
    });
});


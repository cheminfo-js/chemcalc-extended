'use strict';

var CE = require('..');


describe('Test getContaminantReference', function () {
    it('Check the json', function () {
        this.timeout(5000);
        return CE.getContaminantReference().then(function(result) {
            result.length.should.be.above(1000);
            result[0].em.should.be.above(190);
            result[0].charge.should.be.equal(1);
        });
    });
});


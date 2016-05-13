'use strict';

var CE = require('..');


describe('Test getContaminantsReferenceList', function () {
    it('Check the json', function () {
        this.timeout(20000);
        this.retries(5);
        return CE.getContaminantsReferenceList().then(function(result) {
            result.length.should.be.above(1000);
            result[0].em.should.be.equal(26.0030740049 );
            result[0].charge.should.be.equal(-1);
        });
    });
});


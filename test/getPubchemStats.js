'use strict';

var CE = require('..');


describe('Test getPubchemStats', function () {
    it('Check the json', function () {
        this.timeout(10000);
        return CE.getPubchemStats().then(function(result) {
            result.allStats.length.should.be.equal(40);
        });
    });
});


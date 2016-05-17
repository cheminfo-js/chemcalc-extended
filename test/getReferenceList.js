'use strict';

var CE = require('..');


describe('Test getReferenceList', function () {
    it('Check the json', function () {
        this.timeout(20000);
        this.retries(5);
        return CE.getReferenceList('https://googledocs.cheminfo.org/spreadsheets/d/15Kuc5MeOhvm4oeTMvEuP1rWdRFiVWosxXhYwAmuf3Uo/export?format=tsv').then(function(result) {
            result.length.should.be.equal(1199);
            result[0].em.should.be.equal(22.0782503207);
        });
    });
});


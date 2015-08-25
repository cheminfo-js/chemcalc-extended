'use strict';

var CE = require('..');

// experimental is a predicted spectrum with C1, C2, C3 and C4
var experimental=[[218.09644279,172.875],
    [218.099811996,188.234375],
    [218.153967887,97.015625],
    [218.190308688,570.25],
    [219.104148085,52.5703125],
    [219.107564035,36.328125],
    [219.174310683,40.703125],
    [219.193588715,75.34375],
    [220.112077577,422.34375],
    [220.115423536,1499.75],
    [220.169511085,46.3203125],
    [220.205994766,92.5859375],
    [221.041784136,27.8515625],
    [221.115345594,47.32421875],
    [221.118803657,139.3125],
    [221.119893291,358.28125],
    [221.153456208,75.1875],
    [222.111277662,46.74609375],
    [222.127743787,5627.0],
    [222.185151526,90.875],
    [223.11513518,43.34375],
    [223.131093299,603.5625],
    [223.13554821,108.421875]];;
var possibleMFs=[["C10H18O3S"]];


describe('chemcalc-extended matchMFs - check the common parameter 2', function () {
    it('Check common "second"', function () {

        let options = {
            typedResult: true,
            fwhm: 0.0001,
            widthTop: 2e-3,
            widthBottom: 4e-3,
            range: {low: 0.5, high: 5},
            decimalsPPM: 4,
            decimalsMass: 5,
            minSimilarity: 0,
            common: 'second'
        };

// by default minSimilarity=50
        var result=CE.matchMFs(possibleMFs, experimental, options);

        result.results.length.should.equal(1);
        result.results[0].extractExperimental.length.should.equal(2);
        result.results[0].extract.length.should.equal(27);
    });

    it('Check common "first"', function () {

        let options = {
            typedResult: true,
            fwhm: 0.0001,
            widthTop: 2e-3,
            widthBottom: 4e-3,
            range: {low: 0.5, high: 5},
            decimalsPPM: 4,
            decimalsMass: 5,
            minSimilarity: 0,
            common: 'first'
        };

        var result=CE.matchMFs(possibleMFs, experimental, options);

        result.results.length.should.equal(1);
        result.results[0].extractExperimental.length.should.equal(20);
        result.results[0].extract.length.should.equal(2);
    });

    it('Check common "true"', function () {

        let options = {
            typedResult: true,
            fwhm: 0.0001,
            widthTop: 2e-3,
            widthBottom: 4e-3,
            range: {low: 0.5, high: 5},
            decimalsPPM: 4,
            decimalsMass: 5,
            minSimilarity: 0,
            common: true
        };

        var result=CE.matchMFs(possibleMFs, experimental, options);

        result.results.length.should.equal(1);
        result.results[0].extractExperimental.length.should.equal(2);
        result.results[0].extract.length.should.equal(2);
    });

    it('Check common "false"', function () {

        let options = {
            typedResult: true,
            fwhm: 0.0001,
            widthTop: 2e-3,
            widthBottom: 4e-3,
            range: {low: 0.5, high: 5},
            decimalsPPM: 4,
            decimalsMass: 5,
            minSimilarity: 0,
            common: false
        };

        var result=CE.matchMFs(possibleMFs, experimental, options);

        result.results.length.should.equal(1);
        result.results[0].extractExperimental.length.should.equal(20);
        result.results[0].extract.length.should.equal(27);
    });

});

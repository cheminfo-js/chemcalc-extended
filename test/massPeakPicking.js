'use strict';

var CE = require('..');


var spectrum=CE.analyseMF("Cl2.Br2.C100", {isotopomers:'arrayXXYY', fwhm:0.01, gaussianWidth: 10})



var xy=spectrum.arrayXXYY;

var result=CE.massPeakPicking(xy[0], xy[1]);

console.log(result);

describe('Check the peak picking', function () {
    it('Check result', function () {

    });
});


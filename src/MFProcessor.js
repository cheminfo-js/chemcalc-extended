'use strict';


var initSimilarity=require('./ProcessHelper.js').initSimilarity;

var CC = require('chemcalc');


function MFProcessor(experimental, options) {
    initSimilarity(this, options);
    

    this.options.isotopomers = 'arrayXXYY';
    // init with options ans experimental spectrum
    this.options.zone = this.options.zone || {};
    if (!this.options.zone.low) this.options.zone.low = -0.5;
    if (!this.options.zone.high) this.options.zone.high = 4.5;

    if (this.options.decimalsMass) this.factorMass = Math.pow(10, this.options.decimalsMass);
    if (this.options.decimalsPPM) this.factorPPM = Math.pow(10, this.options.decimalsPPM);

    this.similarity.setPeaks1(experimental);
}

MFProcessor.prototype.process = function (mf, result) {
    // we allow to add information on an existing result
    result = result || {};
    var ccResult = CC.analyseMF(mf, this.options);

    var charge = Math.abs(ccResult.parts[0].charge || 1);
    var target = ccResult.parts[0].msem || ccResult.parts[0].em;

    var from, to;
    if (this.options.from && this.options.to) {
        from = this.options.from;
        to = this.options.to;
    } else {
        from = target + this.options.zone.low / charge;
        to = target + this.options.zone.high / charge;
    }

    if (this.widthFunction) {
        var width=this.widthFunction(target, charge)
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }


    this.similarity.setFromTo(from, to);
    this.similarity.setPeaks2(ccResult.arrayXXYY);

    var similarityResult = this.similarity.getSimilarity();
    if (!result.em) result.em = ccResult.em;
    if (!result.info) result.info = mf;
    if (!result.mf) result.mf = ccResult.mf;
    if (!result.charge) result.charge = ccResult.parts[0].charge || 0;
    if (!result.msem) result.msem = ccResult.parts[0].msem || 0;
    result.fromTo = {from: from, to: to};
    result.extract = similarityResult.extract2;
    result.extractInfo = similarityResult.extractInfo2;
    result.diff = similarityResult.diff;
    result.similarity = Math.floor(similarityResult.similarity * 1e4) / 1e2;
    result.color = 'hsla(' + Math.round(similarityResult.similarity * 120) + ',100%,60%,0.6)';
    if (this.options.addExperimentalExtract) {
        result.extractExperimental = similarityResult.extract1;
        result.extractInfoExperimental = similarityResult.extractInfo1;
    }

    if (this.factorPPM) result.ppm = Math.round(result.ppm * this.factorPPM) / this.factorPPM;
    if (this.factorMass) result.em = Math.round(result.em * this.factorMass) / this.factorMass;
    if (this.factorMass && result.msem) result.msem = Math.round(result.msem * this.factorMass) / this.factorMass;

    return result;
};

module.exports = MFProcessor;

'use strict';

var CC = require('chemcalc');
var SimilarityProcessor = require('./SimilarityProcessor');
var Stat = require('ml-stat').array;

/*

// We are looking for a specific pattern in an experimental spectrum

options:
  * before (default : 0.5)
  * width (default : theoretical + 1)
  * common
  * widthBottom
  * widthTop
  * widthFunction
 */

function MFSimilarityProcessor(experimental, mf, options) {
    SimilarityProcessor.call(this, experimental, options);

    // we calculate the theoretical spectrum, normalize (sum to 1) it
    this.theoretical=CC.analyseMF(mf, {isotopomers:'arrayXXYY'}).arrayXXYY;
    var xTheoretical=this.theoretical[0];
    var yTheoretical=this.theoretical[1];
    var sumY=Stat.sum(yTheoretical);
    for (var i=0; i<yTheoretical.length; i++) {
        yTheoretical[i]/=sumY;
    }

    if (!this.options.before) this.options.before=0.5;
    if (!this.options.width) this.options.width=xTheoretical[xTheoretical.length]-xTheoretical[0]+0.5;
}

MFSimilarityProcessor.prototype.process = function (firstX) {
    if (this.widthFunction) {
        var width=this.widthFunction(spectrum[0][0])
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }

    var xTheoretical=this.theoretical[0];
    var yTheoretical=this.theoretical[1];
    var shift=-xTheoretical[0]+firstX;
    for (var i=0; i<yTheoretical.length; i++) {
        xTheoretical[i]+=shift;
    }

    var from=firstX-this.options.before;
    var to=firstX+this.options.width;

    return this.similarity.fastSimilarity(this.theoretical, from, to);
};

module.exports = MFSimilarityProcessor;

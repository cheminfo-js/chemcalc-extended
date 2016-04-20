'use strict';

var initSimilarity=require('./ProcessHelper.js').initSimilarity;


/*
  We calculate the similarity between an experimental spectrum and a specific XY
 */



function SimilarityProcessor(experimental, options) {
    initSimilarity(this, options);


    this.similarity.setPeaks1(experimental);
}

SimilarityProcessor.prototype.process = function (spectrum, from, to) {

    if (this.widthFunction) {
        var width=this.widthFunction(spectrum[0][0])
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }

    return this.similarity.fastSimilarity(spectrum, from, to);
};

module.exports = SimilarityProcessor;

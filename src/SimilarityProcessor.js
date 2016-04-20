'use strict';


/*
  We calculate the similarity between an experimental spectrum and a specific XY
 */


var Similarity = require('peaks-similarity');

function SimilarityProcessor(experimental, options) {
    // we will copy the options to be sure ...
    this.options=Object.create(options || {});

    this.widthFunction=undefined;
    if (this.options.widthFunction) {
        // we will create a function
        var theFunction="";
        if (this.options.widthBottom) theFunction+="var widthBottm="+widthBottm+";";
        if (this.options.widthTop) theFunction+="var widthTop="+widthTop+";";
        theFunction+=this.options.widthFunction;
        theFunction+=";"
        theFunction+="return {widthBottom: widthBottom, widthTop: widthTop};";

         this.widthFunction = new Function('mass', 'charge', theFunction);
    }

    this.similarity = new Similarity({
        widthTop: this.options.widthTop,
        widthBottom: this.options.widthBottom,
        common: this.options.common
    });
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

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
        theFunction=[];
        if (this.options.widthBottom) theFunction.push("var widthBottm="+widthBottm+";");
        if (this.options.widthTop) theFunction.push("var widthTop="+widthTop+";");
        theFunction.push(this.options.widthFunction);
        theFunction.push(";");
        theFunction.push("return {widthBottom: widthBottom, widthTop: widthTop};");

         this.widthFunction = new Function('mass', 'charge', theFunction.join("\r\n"));
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

'use strict';

var Similarity = require('peaks-similarity');

module.exports.initSimilarity= function(context, options) {
    // we will copy the options to be sure ...
    context.options=Object.create(options || {});
    context.widthFunction=undefined;
    if (context.options.widthFunction) {
        // we will create a function
        var theFunction=[];
        if (context.options.widthBottom) theFunction.push("var widthBottm="+widthBottm+";");
        if (context.options.widthTop) theFunction.push("var widthTop="+widthTop+";");
        theFunction.push(context.options.widthFunction);
        theFunction.push(";");
        theFunction.push("return {widthBottom: widthBottom, widthTop: widthTop};");
        context.widthFunction = new Function('mass', 'charge', theFunction.join("\r\n"));
    }

    context.similarity = new Similarity({
        widthTop: context.options.widthTop,
        widthBottom: context.options.widthBottom,
        common: context.options.common
    });
};

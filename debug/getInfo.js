'use strict';

var CE = require('..');



var result=CE.getInfo();



console.log(JSON.stringify(result));

var elements=result.elements;

for (var i=0; i<elements.length; i++) {
    var element=elements[i];
    if (element.symbol=="Ac") {
        console.log(JSON.stringify(element));
    }

}
'use strict';


var CE = require('..');

// experimental is a predicted spectrum with C
var experimental=[[9.7,11.7,11.71,11.72,11.73,11.74,11.75,11.76,11.77,11.78,11.79,11.8,11.81,11.82,11.83,11.84,11.85,11.86,11.87,11.88,11.89,11.9,11.91,11.92,11.93,11.94,11.95,11.96,11.97,11.98,11.99,12,12.01,12.02,12.03,12.04,12.05,12.06,12.07,12.08,12.09,12.1,12.11,12.12,12.13,12.14,12.15,12.16,12.17,12.18,12.19,12.2,12.21,12.22,12.23,12.24,12.25,12.26,12.27,12.28,12.29,12.3,12.31,12.32,12.33,12.34,12.35,12.36,12.37,12.38,12.39,12.4,12.41,12.42,12.43,12.44,12.45,12.46,12.47,12.48,12.49,12.5,12.51,12.52,12.53,12.54,12.55,12.56,12.57,12.58,12.59,12.6,12.61,12.62,12.63,12.64,12.65,12.66,12.67,12.68,12.69,12.7,12.71,12.72,12.73,12.74,12.75,12.76,12.77,12.78,12.79,12.8,12.81,12.82,12.83,12.84,12.85,12.86,12.87,12.88,12.89,12.9,12.91,12.92,12.93,12.94,12.95,12.96,12.97,12.98,12.99,13,13.01,13.02,13.03,13.04,13.05,13.06,13.07,13.08,13.09,13.1,13.11,13.12,13.13,13.14,13.15,13.16,13.17,13.18,13.19,13.2,13.21,13.22,13.23,13.24,13.25,13.26,13.27,13.280000000000001,13.29,13.3,15.3],[0,1.3670611642005019e-12,7.018086806749659e-12,3.408530039598323e-11,1.566149139777829e-10,6.807955480447043e-10,2.799741264282628e-9,1.0892728768715286e-8,4.0093417978312345e-8,1.3961339042194703e-7,4.5993733696714487e-7,0.0000014334675273127004,0.000004226634099007014,0.000011790142279141375,0.000031114372012929936,0.00007768204218725967,0.0001834838434960258,0.00041000827676433157,0.0008667722906387635,0.001733544581277527,0.0032800662141146504,0.005871482991872821,0.009943301399969238,0.015930558470620144,0.02414621138768151,0.03462458653906543,0.046971863934982566,0.06028490663095761,0.07319762523754177,0.08408199170005368,0.091374831691075,0.09394372786996513,0.091374831691075,0.08408199170005368,0.07319762523754177,0.06028490663095761,0.046971863934982566,0.03462458653906543,0.02414621138768151,0.015930558470620144,0.009943301399969238,0.005871482991872821,0.0032800662141146504,0.001733544581277527,0.0008667722906387635,0.00041000827676433157,0.0001834838434960258,0.00007768204218725967,0.000031114372012929936,0.000011790142279141375,0.000004226634099007014,0.0000014334675273127004,4.5993733696714487e-7,1.3961339042194703e-7,4.0093417978312345e-8,1.0892728768715286e-8,2.799741264282628e-9,6.807955480447043e-10,1.566149139777829e-10,3.408530039598323e-11,7.018086806749659e-12,1.3670611642005019e-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.4785762111538834e-14,7.590572003661311e-14,3.6865734785911304e-13,1.6939043561733317e-12,7.363299670553255e-12,3.028124080443153e-11,1.1781279472885229e-10,4.3363951518037203e-10,1.5100204968309241e-9,4.974557268319468e-9,1.5503995291868892e-8,4.5714126007656975e-8,1.2751897542384788e-7,3.3652459369084233e-7,8.401878615219634e-7,0.00000198451139735922,0.0000044345381192543695,0.000009374773587218001,0.000018749547174436003,0.00003547630495403493,0.00006350436471549498,0.00010754404627481132,0.00017230059196971146,0.0002611588616680402,0.00037449012025472567,0.0005080349177239598,0.0006520251702731693,0.0007916856262424915,0.0009094079765395475,0.000988285352364806,0.0010160698354479197,0.000988285352364806,0.0009094079765395475,0.0007916856262424915,0.0006520251702731693,0.0005080349177239598,0.00037449012025472567,0.0002611588616680402,0.00017230059196971146,0.00010754404627481132,0.00006350436471549498,0.00003547630495403493,0.000018749547174436003,0.000009374773587218001,0.0000044345381192543695,0.00000198451139735922,8.401878615219634e-7,3.3652459369084233e-7,1.2751897542384788e-7,4.5714126007656975e-8,1.5503995291868892e-8,4.974557268319468e-9,1.5100204968309241e-9,4.3363951518037203e-10,1.1781279472885229e-10,3.028124080443153e-11,7.363299670553255e-12,1.6939043561733317e-12,3.6865734785911304e-13,7.590572003661311e-14,1.4785762111538834e-14,0]];


describe('Check mfsimilarityProcessor', function () {
    var noiseLevel=0;

    var mfSimilarityProcessor=new CE.MFSimilarityProcessor(experimental, 'C',
        {
            widthTop: 0.1,
            widthBottom: 0.2
        });

    var xExperimental=experimental[0];
    var yExperimental=experimental[1];

    var result=[new Array(xExperimental.length),new Array(xExperimental.length)];
    for (var i=0; i<xExperimental.length; i++) {
        var x=xExperimental[i];
        if (yExperimental[i]>noiseLevel) {
            var similarity=mfSimilarityProcessor.process(x);
            result[0][i]=x;
            result[1][i]=similarity;
        } else {
            result[0][i]=x;
            result[1][i]=0;
        }
    }

    it('Check results element 0', function () {
        result.length.should.equal(2);
        result[0].length.should.equal(163);
        result[0][1].should.equal(11.7);
        result[1][33].should.approximately(0.958351,0.001);

    });
});


describe('Check mfsimilarityProcessor', function () {
    var noiseLevel=0.01;

    var mfSimilarityProcessor=new CE.MFSimilarityProcessor(experimental, 'C',
        {
            widthTop: 0.1,
            widthBottom: 0.2,
            common: 'second'
        });

    var xExperimental=experimental[0];
    var yExperimental=experimental[1];

    var result=[new Array(xExperimental.length),new Array(xExperimental.length)];
    for (var i=0; i<xExperimental.length; i++) {
        var x=xExperimental[i];
        if (yExperimental[i]>noiseLevel) {
            var similarity=mfSimilarityProcessor.process(x);
            result[0][i]=x;
            result[1][i]=similarity;
        } else {
            result[0][i]=x;
            result[1][i]=0;
        }
    }

    it('Check results element 0', function () {
        result.length.should.equal(2);
        result[0].length.should.equal(163);
        result[0][1].should.equal(11.7);
        result[1][33].should.approximately(0.9945,0.001);

    });
});


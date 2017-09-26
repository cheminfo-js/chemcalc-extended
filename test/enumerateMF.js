'use strict';

var CE = require('..');

describe('enumerate MFs test', function () {
    it('simple cases', function () {
        var input = [
            /HSer(H-1PO3)?OH/,
            /HAla(H-1PO3|)Gly(H-1PO3|)Pro(H-1PO3|)OH/,
            /HCys(H-1Cys(Gly|Ala)|Ala)OH/,
            'HCys(C(Gly|Ala10)|C{50,50}|C{90,10})OH'
        ];

        var expectedOutput = [
            // case 1
            [
                'HSer(H-1PO3)OH',
                'HSerOH'
            ],
            // case 2
            [
                'HAla(H-1PO3)Gly(H-1PO3)Pro(H-1PO3)OH',
                'HAla(H-1PO3)Gly(H-1PO3)ProOH',
                'HAla(H-1PO3)GlyPro(H-1PO3)OH',
                'HAla(H-1PO3)GlyProOH',
                'HAlaGly(H-1PO3)Pro(H-1PO3)OH',
                'HAlaGly(H-1PO3)ProOH',
                'HAlaGlyPro(H-1PO3)OH',
                'HAlaGlyProOH'
            ],
            // case 3
            [
                'HCys(Ala)OH',
                'HCys(H-1Cys(Ala))OH',
                'HCys(H-1Cys(Gly))OH'
            ],
            // case 4
            [
                'HCys(C(Ala10))OH',
                'HCys(C(Gly))OH',
                'HCys(C{50,50})OH',
                'HCys(C{90,10})OH'
            ]
        ];

        for (var i = 0; i < input.length; i++) {
            CE.enumerateMF(input[i]).sort().should.eql(expectedOutput[i]);
        }
    });

    it('advanced case', function () {
        var result = CE.enumerateMF("H(Cys|Ala)1-4Cys(H-1SMe|H-1(Cl|Br))OH");
        result.length.should.equal(6);
        result.sort().should.eql(
            [
                'H(Ala)1-4Cys(H-1(Br))OH',
                'H(Ala)1-4Cys(H-1(Cl))OH',
                'H(Ala)1-4Cys(H-1SMe)OH',
                'H(Cys)1-4Cys(H-1(Br))OH',
                'H(Cys)1-4Cys(H-1(Cl))OH',
                'H(Cys)1-4Cys(H-1SMe)OH'
            ]);
    });


});


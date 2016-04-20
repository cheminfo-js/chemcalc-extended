'use strict';

var removeMFLastPart = require('../../src/util/removeMfLastPart.js');


describe('removeMfLastPart test', function () {
    it('Should yield the correct results', function () {
        removeMFLastPart("CK").should.equal("C");
        removeMFLastPart("C10H").should.equal("C10");
        removeMFLastPart("C10H2O").should.equal("C10H2");
        removeMFLastPart("(CH3)2N").should.equal("(CH3)2");
        removeMFLastPart("((CH3)2CH)").should.equal("");
        removeMFLastPart("Na((CH3)2CH)").should.equal("Na");
        removeMFLastPart("((CH3)2CH)((CH3)2CH)").should.equal("((CH3)2CH)");
        removeMFLastPart("((CH3)2CH)Na3((CH3)2CH)").should.equal("((CH3)2CH)Na3");
        removeMFLastPart("((CH3)2CH)123((CH3)2CH)").should.equal("((CH3)2CH)123");
    });
});


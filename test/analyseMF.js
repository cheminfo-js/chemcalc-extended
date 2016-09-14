'use strict';

var CCE = require('..');



describe('analyseMF', function () {
    it('For Et3N', function () {
        var result=CCE.analyseMF('Et3N', {});
        result.atoms.should.eql({'C':6, 'H':15, 'N': 1});
    });
    it('For Et3N.HCl', function () {
        var result=CCE.analyseMF('Et3N.HCl', {});
        result.atoms.should.eql({'C':6, 'H':16, 'N': 1, 'Cl': 1});
    });
});


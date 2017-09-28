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
    it('For 2CH3.3HCl', function () {
        var result=CCE.analyseMF('2H3CN.3HCl.Br', {});
        result.atoms.should.eql({'Br':1, 'C':2, 'H':9, 'N': 2, 'Cl': 3});
        result.totalMF.should.eql('C2H9N2Cl3Br');
    });
});


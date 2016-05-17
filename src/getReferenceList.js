var request = require('superagent-promise')(require('superagent'), Promise);
var Papa = require('papaparse');
var CC = require('chemcalc');
var combineMFs = require('./combineMFs');

function getReferenceList(url) {

    return Promise.all([
        request.get(url).end(),
    ]).then(function (results) {
        return parse(results[0].text);
    });
    
    function parse(tsv) {
        var contaminants=Papa.parse(tsv,
            {
                delimiter:"\t",
                header: true
            }
        ).data;

        var results=[];
        for (var contaminant of contaminants) {
            // we need to calculate all the possibilities
            var mfs=combineMFs([contaminant.mf, contaminant.modif]);
            for (var mf of mfs) {
                mf.info=contaminant;
                mf.similarity='';
                mf.mf=CC.analyseMF(mf.mf).mf;
                results.push(mf)
            }
        }
        
        results=results.filter(function(a) {
            return a.msem!==0;
        })
        
        results.sort(function(a,b) {
            return a.msem-b.msem;
        });

        var uniqueResults=[results[0]];
        for (var i=1; i<results.length; i++) {
            if (results[i-1].msem!==results[i].msem) {
                uniqueResults.push(results[i]);
            }
        }
        
        return uniqueResults;
    }
}

module.exports = getReferenceList;




var request = require('superagent-promise')(require('superagent'), Promise);
var Papa = require('papaparse');
var CC = require('chemcalc');
var combineMFs = require('./combineMFs');

function getContaminantsReferenceList() {

    return Promise.all([
        request.get('https://googledocs.cheminfo.org/spreadsheets/d/1LrJCl9-xSZKhGA9Y8nKVkYwB-mEOHBkTXg5qYXeFpZY/export?format=tsv').end(),
        request.get('https://googledocs.cheminfo.org/spreadsheets/d/1C_H9aiJyu9M9in7sHMOaz-d3Sv758rE72oLxEKH9ioA/export?format=tsv').end()
    ]).then(function (results) {
        return parse(results[0].text, results[1].text);
    });

    function parse(tsv, tsvReferences) {
        var contaminants=Papa.parse(tsv,
            {
                delimiter:"\t",
                header: true
            }
        ).data;

        var referencesArray=Papa.parse(tsvReferences,
            {
                delimiter:"\t",
                header: true
            }
        ).data;

        var references={};
        referencesArray.forEach(
            function(ref) {
                references[ref.label]=ref;
            }
        );
        
        var results=[];

        for (var contaminant of contaminants) {
            // we add references
            var refs=contaminant.references.split(/[ ,]+/);
            contaminant.references=[];
            for (var ref of refs) {
                contaminant.references.push(
                    references[ref]
                );
            }

            // we need to calculate all the possibilities
            var mfs=combineMFs([contaminant.mf, contaminant.modif]);
            for (var mf of mfs) {
                mf.info=contaminant;
                mf.ESI = contaminant.ESI==='X' ? true : false;
                mf.MALDI = contaminant.MALDI==='X' ? true : false;
                mf.positive = contaminant.positive==='X' ? true : false;
                mf.negative = contaminant.negative==='X' ? true : false;
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

module.exports = getContaminantsReferenceList;




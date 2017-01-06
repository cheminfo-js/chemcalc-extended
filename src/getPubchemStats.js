var request = require('superagent-promise')(require('superagent'), Promise);


function getPubchemStats(id) {
    return request.get('https://pubchem.cheminfo.org/mfStats/search?id='+id).then(function (results) {
        return results.body.result;
    });
}

module.exports = getPubchemStats;




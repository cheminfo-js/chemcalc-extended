var getReferenceList = require('./getReferenceList.js');

function getContaminantsReferenceList() {
    return getReferenceList(
        'https://googledocs.cheminfo.org/spreadsheets/d/1LrJCl9-xSZKhGA9Y8nKVkYwB-mEOHBkTXg5qYXeFpZY/export?format=tsv',
        'https://googledocs.cheminfo.org/spreadsheets/d/1C_H9aiJyu9M9in7sHMOaz-d3Sv758rE72oLxEKH9ioA/export?format=tsv'
    );
}

module.exports = getContaminantsReferenceList;




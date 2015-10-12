'use strict';

module.exports = bestResults;

/* we have 2 criteria to find the best results
 1. best match per zone based on the bestOf parameter
 2. maxResults : maximal number of results
 */
function bestResults(results, bestOf, maxResults, minSimilarity) {
    var newResults = [];

    // in order to find the bestOf we will sort by similarity and take all of them for which there is nothing in a range
    // of the bestOf range

    results.sort(function (a, b) {
        return b.similarity - a.similarity;
    });

    if (minSimilarity) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].similarity < minSimilarity) {
                results = results.slice(0, i);
                break;
            }
        }
    }

    if (bestOf) {
        for (var i = 0; i < results.length; i++) {
            for (var j = 0; j < newResults.length; j++) {
                if (Math.abs(newResults[j].msem - results[i].msem) < (bestOf / (results[i].charge || 1))) {
                    break;
                }
            }
            if (j == newResults.length) {
                newResults.push(results[i]);
            }
        }
    } else {
        newResults=results.slice(0);
    }

    if (maxResults) {
        newResults = newResults.slice(0, maxResults);
    }

    return newResults;
};

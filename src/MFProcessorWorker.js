'use strict';

var WorkerManager = require('web-worker-manager');

var bestResults = require('./bestResults');

module.exports = MFProcessorWorker;

function MFProcessorWorker(options) {
    if (!options.url) {
        throw new Error('URL to the chemcalc extended library is needed');
    }
    options.deps = [options.url];
    this.options = options;
    this.manager = null;
    this.hasExperimental = false;
    this._init();
}

MFProcessorWorker.prototype._init = function () {
    this.hasExperimental = false;
    this.manager = new WorkerManager(insideMFProcessor, this.options);
};

MFProcessorWorker.prototype.init = function (experimental, calculationOptions) {
    this.hasExperimental = true;
    return this.manager.postAll('init', [experimental, calculationOptions]);
};

MFProcessorWorker.prototype.process = function (mfs, experimental, options) {
    if (!Array.isArray(mfs)) {
        throw new TypeError('mfs must be an array');
    }
    if (!Array.isArray(experimental)) {
        options = experimental;
        experimental = null;
    }
    options = options || {};
    var onStep = options.onStep || Function.prototype;
    var onError = options.onError || Function.prototype;
    var prom;
    if (experimental) {
        prom = this.init(experimental, options);
    } else {
        prom = Promise.resolve();
    }
    var self = this;
    return prom.then(function () {
        return new Promise(function (resolve, reject) {
            var processed = 0;
            var total = mfs.length;
            var results = [];
            mfs.forEach(function (mf) {
                self.manager.post('data', [mf.mf]).then(
                    function (result) {
                        result.parts = mf;
                        results.push(result);
                        if (results.length > options.maxResults * 2) {
                            results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
                        }

                    },
                    onError
                ).then(function () {
                    processed++;
                    onStep(processed, total);
                    if (processed === total) {
                        results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
                        results=results.map(function(a) {
                            var ppm=((a.msem-options.mass)/(a.msem))*1e6;
                            a.ppm=Math.round(ppm*100)/100;
                            a.absppm=Math.abs(a.ppm*100)/100;
                            return a;
                        });
                        resolve(results);
                    }
                });
            });
        });
    });
};

MFProcessorWorker.prototype.reset = function () {
    this.manager.terminate();
    this._init();
};

function insideMFProcessor() {
    var processor;
    worker.on('init', function(send, exp, options) {
        processor = new chemcalcExtended.MFProcessor(exp, options);
        send(true);
    });
    worker.on('data', function(send, data){
        send(processor.process(data));
    });
}

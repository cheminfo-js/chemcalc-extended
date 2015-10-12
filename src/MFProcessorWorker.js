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

MFProcessorWorker.prototype.callbacks = function (options) {
    options = options || {};
    this.onStep = options.onStep || Function.prototype;
    this.onError = options.onError || Function.prototype;
};

MFProcessorWorker.prototype.init = function (experimental, calculationOptions) {
    this.hasExperimental = true;
    return this.manager.postAll('init', [experimental, calculationOptions]);
};

MFProcessorWorker.prototype.process = function (mfs, experimental, calculationOptions) {
    if (!Array.isArray(mfs)) {
        throw new TypeError('mfs must be an array');
    }
    if (!Array.isArray(experimental)) {
        calculationOptions = experimental;
 //       experimental = null;
    }
    var promise;
    if (experimental) {
        promise = this.init(experimental, calculationOptions);
    } else {
        promise = Promise.resolve();
    }
    var self = this;
    return promise.then(function () {
        return new Promise(function (resolve, reject) {
            var processed = 0;
            var total = mfs.length;
            var results = [];
            mfs.forEach(function (mf) {
                self.manager.post('data', [mf.mf]).then(
                    function (result) {
                        result.parts = mf;
                        results.push(result);
                        if (results.length > calculationOptions.maxResults * 2) {
                            results = bestResults(results, calculationOptions.bestOf, calculationOptions.maxResults, calculationOptions.minSimilarity);
                        }

                    },
                    this.onError
                ).then(function () {
                    processed++;
                    this.onStep(processed, total);
                    if (processed === total) {
                        results = bestResults(results, calculationOptions.bestOf, calculationOptions.maxResults, calculationOptions.minSimilarity);
                        results=results.map(function(a) {
                            var ppm=((a.msem-calculationOptions.mass)/(a.msem))*1e6;
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

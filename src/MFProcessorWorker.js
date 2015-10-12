'use strict';

var WorkerManager = require('web-worker-manager');

var bestResults = require('./bestResults');

module.exports = MFProcessorWorker;

function MFProcessorWorker(managerOptions) {
    if (!managerOptions.url) {
        throw new Error('URL to the chemcalc extended library is required');
    }
    managerOptions.deps = [managerOptions.url];
    this.managerOptions = managerOptions;
    this.manager = null;
    this._init();
}

MFProcessorWorker.prototype._init = function () {
    this.manager = new WorkerManager(insideMFProcessor, this.managerOptions);
};

MFProcessorWorker.prototype.callbacks = function (callBacksOptions) {
    callBacksOptions = callBacksOptions || {};
    this.onStep = callBacksOptions.onStep || Function.prototype;
    this.onError = callBacksOptions.onError || Function.prototype;
};

MFProcessorWorker.prototype.init = function (experimental, calculationOptions) {
    this.calculationOptions=calculationOptions;
    return this.manager.postAll('init', [experimental, calculationOptions]);
};

MFProcessorWorker.prototype.process = function (mfs) {
    if (!Array.isArray(mfs)) {
        throw new TypeError('mfs must be an array');
    }
    var self = this;
    return new Promise(function (resolve, reject) {
        var processed = 0;
        var total = mfs.length;
        var results = [];
        mfs.forEach(function (mf) {
            self.manager.post('data', [mf.mf]).then(
                function (result) {
                    result.parts = mf;
                    results.push(result);
                    if (results.length > self.calculationOptions.maxResults * 2) {
                        results = bestResults(results, self.calculationOptions.bestOf, self.calculationOptions.maxResults, self.calculationOptions.minSimilarity);
                    }

                },
                self.onError
            ).then(function () {
                processed++;
                self.onStep(processed, total);
                if (processed === total) {
                    results = bestResults(results, self.calculationOptions.bestOf, self.calculationOptions.maxResults, self.calculationOptions.minSimilarity);
                    results=results.map(function(a) {
                        var ppm=((a.msem-self.calculationOptions.mass)/(a.msem))*1e6;
                        a.ppm=Math.round(ppm*100)/100;
                        a.absppm=Math.abs(a.ppm*100)/100;
                        return a;
                    });
                    resolve(results);
                }
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

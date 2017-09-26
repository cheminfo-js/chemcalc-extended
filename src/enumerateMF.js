var enumerateRegExp = require('regexp-enumerator');

function enumerateMF(regexp, options) {
    options = options | {};
    var source = preprocessRegExp(typeof regexp !== 'string' ? regexp.source : regexp);
    var output = enumerateRegExp(source, options);
    output = postProcess(output);
    return output;
}

module.exports = enumerateMF;

function preprocessRegExp(string) {
    var replace = [/\(/g, /\)/g, /{/g, /}/g];
    var to = ['(\\((', ')\\))', '\\{', '\\}'];

    for (var i = 0; i < replace.length; i++) {
        string = string.replace(replace[i], to[i]);
    }

    return string;
}

function postProcess(output) {
    return output.map(elem => elem.replace(/\(\)/g, ''));
}
# chemcalc-extended

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][coveralls-image]][coveralls-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

chemcalc-extended project - Extend chemcalc-js to allow experimental spectra similarity search

## Configuration

### mfFromMonoisotopicMassSimilarity(mass, experimental, options)

* experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]

options are the same as mfFromMonoisotopicMass with the following added possibilities:
* widthTop : top width of the trapezoid
* widthBottom : bottom width of the trapezoid
* widthFunction : code that allows to calculate the `widthBottom` and `widthTop` from `mass` and `charge`.
```js
var widthTop=mass*0.005;
var widthBottom=mass*0.010;
```
* from : mass "from" which calculate the similarity
* to : mass "to" which calculate the similarity
* decimalsPPM : number of decimals for PPM
* decimalsMass : number decimals for the mass

### matchMFs

We will try to find the molecular formula that match 

matchMFs(mfs, experimental, options)
* experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
* mfs: array of array (or simple array) of all the possibilities to test / combine
* options
  * widthTop : top width of the trapezoid
  * widthBottom : bottom width of the trapezoid
  * from : mass "from" which calculate the similarity
  * to : mass "to" which calculate the similarity
  * decimalsPPM : number of decimals for PPM
  * decimalsMass : number of decimals for the mass
  * zone : zone on which to calculate similarity. It is based on monoisotopic mass. It is an object that contains "low" and "high". Those values will be divided by the charge of the current molecular formula. Default: zone: {low: -0.5, high: 4.5}
  * bestOf : keep only the best result in the defined range of mass. By default, 0 = not used
  * maxResults : keep only the best similarity. This process is done after "bestOf". By default: 500
  * minSimilarity : minimal similarity value (between 0 and 1). By default: 50
  * common : only consider the common part for similarity calculation based on the widthBottom value

### combineMFs(array)

We may have array of array of string and we combine to get all the possible MFs

ex:
* combineMFs([["C","H$YY"],[],[""],["Cl","Br$XX"]])
* combineMFs(["C.H.O","+,++",['Cl','Br$XX']])

### getEutrophicationPotential

getEutrophicationPotential(mf)

Returns an object containing the eutrophication potential of the given molecular formula.

### Peptides

#### convertAASequence(sequence)

Returns a peptidic sequence from a PDB or one letter code to the internal molecular formula format

__Arguments__

* `sequence` - string with the amino acids sequence

#### chargePeptide(mf)

Add a positive charge on Arg, His and Lys

__Arguments__

* `mf` - string with a molecular formula to charge

#### generatePeptideFragments(mf, [options])

Generate [peptide fragmentation](http://en.wikipedia.org/wiki/Peptide_sequence_tag).
Returns an array of molecular formulas with the different fragments.

__Arguments__

* `mf` - string with the molecular formula
* `options` - object with requested fragments. Default: `{a:false, b:true, c:false, x:false, y:true, z:false, i:false}`


#### splitPeptide(sequence)

Split a 3 letter code sequence respecting uppercase, lowercase in an array of residu.

__Arguments__

* `sequence` - string with the amino acids sequence


#### digestPeptide(sequence, options)

Allows to digest virtually a peptide

__Arguments__

* `sequence` - string with the amino acids sequence
* `options`
  * `minMissed` - minimal missed cleavage (default: 0)
  * `maxMissed` - maximal missed cleavage (default: 0)
  * `minResidue` - minimal number of residues (default: 0)
  * `maxResidue` - maximal number of residues (default: infinity)
  * `enzyme` - enzyme used for digestion
    * chymotrypsin : (Phe|Tyr|Trp)(?!Pro)
    * trypsin : (Lys|Arg)(?!Pro)
    * lysc : (Lys)(?!Pro)
    * glucph4 : (Glu)(?!Pro|Glu)
    * glucph8 : (Asp|Glu)(?!Pro|Glu)
    * thermolysin : (Leu|Ile|Met|Phe|Trp)
    * cyanogenbromide : (Met)

## Development

### Install dev dependencies

`npm install`

### Execute test suite

`npm test`

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/chemcalc-extended.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/chemcalc-extended
[travis-image]: https://img.shields.io/travis/cheminfo-js/chemcalc-extended/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/chemcalc-extended
[coveralls-image]: https://img.shields.io/coveralls/cheminfo-js/chemcalc-extended.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/cheminfo-js/chemcalc-extended
[david-image]: https://img.shields.io/david/cheminfo-js/chemcalc-extended.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/chemcalc-extended
[download-image]: https://img.shields.io/npm/dm/chemcalc-extended.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/chemcalc-extended

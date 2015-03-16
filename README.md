# chemcalc-extended

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

chemcalc-extended project - Extend chemcalc-js to allow experimental spectra similarity search

## Configuration

### mfFromMonoisotopicMass

extend mfFromMonoisotopicMass in order to include in the options:
* experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
* widthTop : top width of the trapezoid
* widthBottom : bottom width of the trapezoid
* from : mass "from" which calculate the similarity
* to : mass "to" which calculate the similarity
* decimalsPPM : number of decimals for PPM
* decimalsMass : number odecimals for the mass

### matchMFs

We will try to find the molecular formula that match 

matchMFs(experimental, mfs, options)
* experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
* mfs: array of array (or simple array) of all the possibilities to test / combine
* options
  * widthTop : top width of the trapezoid
  * widthBottom : bottom width of the trapezoid
  * from : mass "from" which calculate the similarity
  * to : mass "to" which calculate the similarity
  * decimalsPPM : number of decimals for PPM
  * decimalsMass : number odecimals for the mass

### getEutrophicationPotential

getEutrophicationPotential(mf)

Returns an object containing the eutrophication potential of the given molecular formula.

## Development

### Install dev dependencies

`npm install`

### Execute test suite

`npm test`

### Build dist files

`npm run build`

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/cheminfo-chemcalc-extended.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cheminfo-chemcalc-extended
[travis-image]: https://img.shields.io/travis/cheminfo-js/chemcalc-extended/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/chemcalc-extended
[david-image]: https://img.shields.io/david/cheminfo-js/chemcalc-extended.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/chemcalc-extended
[download-image]: https://img.shields.io/npm/dm/cheminfo-chemcalc-extended.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/cheminfo-chemcalc-extended

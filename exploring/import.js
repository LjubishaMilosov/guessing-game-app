//Default import


const somethingIported = require('./default_export.js')

console.log(somethingIported)

//Named import

const {randomNumber,myName} = require('./named_export.js')

console.log(randomNumber)
console.log(myName)
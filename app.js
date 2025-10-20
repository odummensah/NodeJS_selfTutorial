// MODULES
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require ('./4-names')
const sayHi = require ('./5-utils')


sayHi(names.samuel)
sayHi(names.peter)
sayHi('susan')  


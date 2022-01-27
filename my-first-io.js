var fs = require('fs')

var contenu = fs.readFileSync(process.argv[2])
var Nb = contenu.toString().split('\n').length - 1
console.log(Nb)
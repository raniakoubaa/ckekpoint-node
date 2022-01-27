// const file1=process.argv[2];
// const file2=process.argv[3];
// const mymodule = require('./mymodule.js')
// filterFn(file1, file2, function (err, list) {
//     if (err)
//       return console.error('There was an error:', err)
  
//     list.forEach(function (file) {
//       console.log(file)
//     })
//   })
var dir = process.argv[2]
var filterStr = process.argv[3]
const mymodule = require('./mymodule.js')
mymodule(dir, filterStr, function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
      console.log(file)
    })
  })


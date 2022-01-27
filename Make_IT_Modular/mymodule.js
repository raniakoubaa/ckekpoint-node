var fs = require('fs')
var path = require('path')
const mymodule = (dirName,fileName, callback) =>{
    fs.readdir(dirName,function (err, list){
        if (err) {
            callback(err)
        }
          list = list.filter(function (file) {
         return path.extname(file) === '.' + fileName
        }) 
         callback(null,list);
    })
}

module.exports= mymodule
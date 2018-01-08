'use stric'

const fs = require('fs')
const path = require('path')

module.exports = function(directory, extension, callBack){
    fs.readdir(directory, function func (err, list){
        if (err) {
            return callBack(err)
        }
        // podia ter sido usado esta solução em vez do activa
        /*list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
        */
        let names = []
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === ('.' + extension)) {
                names.push(list[i])
            }
        }
        callBack(null, names)
    })
}

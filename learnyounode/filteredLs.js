'use strict'

const fs = require('fs')
const path = require('path')

let directory = process.argv[2]
let extension = process.argv[3]

fs.readdir(directory, function callBack (err, list){
    if (err) {
        return console.log(err)
        // throw err
    }
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === ('.' + extension)) {
            console.log(list[i])
        }
    }
})

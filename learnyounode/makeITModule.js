'use strict'

const modul = require('./module.js')

let directory = process.argv[2]
let extension = process.argv[3]

modul(directory, extension, function(err, list){
    if(err){
        return console.error('There was an error:', err) //retirado da solução
    }
    for (var i = 0; i < list.length; i++) {
        console.log(list[i])
    }
})

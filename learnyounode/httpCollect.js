'use strict'

const http = require('http')
const url = process.argv[2]
const bl = require('bl')

http.get(url, (response) => {
    if(response.error) {
        console.log('Erro na resposta')
        throw response.error
    }
    response.pipe(bl(function (err, data) {
        if(err)
            throw err
        console.log(data.length)
        console.log(data.toString())
    }))
})

/* -- Outra solução
  var http = require('http')
  var bl = require('bl')

  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  })

*/

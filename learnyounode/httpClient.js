'use strict'

const http = require('http')
const url = process.argv[2]

http.get(url, (response) => {
    if(response.error) {
        console.log('Erro na resposta')
        throw response.error
    }
    response.setEncoding('utf8')
    response.on('data', (data) => {
        console.log(data)
    })
})

/* -- Outra solução
  var http = require('http')

  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  }).on('error', console.error)
  
*/

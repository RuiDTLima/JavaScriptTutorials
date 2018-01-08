'use strict'

const http = require('http')
const urlArray = [process.argv[2], process.argv[3], process.argv[4]]

let currentFinishResponses = 0
let responses = ['', '', '']

for (let i in urlArray){
    http.get(urlArray[i], (response) => {

        if(response.error) {
            console.log('Erro na resposta')
            throw response.error
        }

        response.setEncoding('utf8')

        response.on('data', (data) => {
            responses[i] += data
        })

        response.on('end', () => {
            currentFinishResponses++
            if(currentFinishResponses == urlArray.length)
                for (let i = 0; i < responses.length; i++) {
                    console.log(responses[i])
                }
        })
    })
}

/* -- Outra solução
  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0

  function printResults () {
    for (var i = 0; i < 3; i++) {
      console.log(results[i])
    }
  }

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
          printResults()
        }
      }))
    })
  }

  for (var i = 0; i < 3; i++) {
    httpGet(i)
  }

*/

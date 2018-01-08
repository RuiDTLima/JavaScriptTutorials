'use strict'

const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    let stream = fs.createReadStream(process.argv[3])
    stream.on('open', () => {
        stream.pipe(res)
    })
    stream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(process.argv[2])

/* -- Outra solução
  var http = require('http')
  var fs = require('fs')

  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
  })

  server.listen(Number(process.argv[2]))
*/

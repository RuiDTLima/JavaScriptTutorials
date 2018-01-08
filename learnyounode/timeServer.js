'use strict'

const net = require('net')
const server = net.createServer((socket) => {
    let date = new Date()
    let time = ''
    time += date.getFullYear()

    let temp = date.getMonth() + 1
    if (temp < 10) {
        temp = '0' + date.getMonth()
    }
    time += '-' + temp

    temp = date.getDate()
    if (temp < 10) {
        temp = '0' + temp
    }
    time += '-' + temp

    temp = date.getHours()
    if (temp < 10) {
        temp = '0' + temp
    }
    time += ' ' + temp

    temp =  date.getMinutes()
    if (temp < 10) {
        temp = '0' + temp
    }
    time += ':' + temp

    socket.write(time + '\n')
    socket.end()
})
server.listen(process.argv[2])


/*  -- Outra solução
    var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/

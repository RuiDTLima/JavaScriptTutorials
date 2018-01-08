'use strict'

function duckCount() {
    return [].slice.call(arguments).filter(value => value.hasOwnProperty('quack')).length
}

module.exports = duckCount

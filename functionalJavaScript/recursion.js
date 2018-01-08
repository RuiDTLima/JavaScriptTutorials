'use strict'

function reduce (arr, fn, initial) {
    return arr.reduce(fn, initial)
}

module.exports = reduce

/* -- Outra solução nodeschool.io
    function reduce(arr, fn, initial) {
        return (function reduceOne(index, value) {
            if (index > arr.length - 1)
                return value // end condition
            return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }

    module.exports = reduce
*/

'use strict'

function doubleAll(numbers) {
    return numbers.map(i => i * 2)
}

/* -- Solução fornecida
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
*/

module.exports = doubleAll

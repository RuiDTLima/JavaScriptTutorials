'use strict'

function getShortMessages(messages) {
    return messages.filter(i => i.message.length < 50)
                   .map(message => message.message)
}

/* Outra solução
  module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }
*/

module.exports = getShortMessages

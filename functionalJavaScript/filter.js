function getShortMessages(messages) {
  return messages.filter(i => i.message.length < 50)
                 .map(message => message.message)
}

module.exports = getShortMessages

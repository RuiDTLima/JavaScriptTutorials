function countWords(inputWords) {
  return inputWords.reduce(function(ret, word){
    if (word in ret) {
      ret[word]++
    }
    else ret[word] = 1
    return ret
  },{})
}

/* -- Outra solução
    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords
*/

module.exports = countWords

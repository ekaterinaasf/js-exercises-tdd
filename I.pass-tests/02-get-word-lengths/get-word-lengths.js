var getWordLengths = function(someWords) {
  let rez = [];
  for (let i = 0; i < someWords.length; i++) {
    rez.push(someWords[i].length);
  }
  return rez;
};

module.exports = getWordLengths;

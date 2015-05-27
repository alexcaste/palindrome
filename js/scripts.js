var palindromeFind = function(word) {

  var wordArray = word.split("")
  var reverseArray = wordArray
  reverseArray.reverse()
  if (wordArray.length !== reverseArray.length) {
    return false;
    }

  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== reverseArray[i]) {
      return false;
    }
  }
  return true;
};

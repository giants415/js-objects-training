/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/
// var count = 0;
var letterCount = function(stringToSplit) {
  var letters = {};
  var letterArray = stringToSplit.split('');
  letterArray.forEach(function(el) {
    if (letters[el]) {
      letters[el]++;
    } else {
      letters[el] = 1;
    }
  });
  return letters;
}








//   for (var i = 0; i < letterArray.length; i++) {
//     for (var j = 0; j < letterArray.length - 1; j++) {
//       if (letterArray[i] == letterArray[j+1]) {
//         letters++;
//       } else {
//         letters = 1;
//       }
//     }
//   };
//   return letters;
// } Great idea but too difficult to implement


// return letters (or whatever my object is that stores my counts)
// the letters will be my keys


// var sortedArray = letterArray.sort();
// for (var i = 0; i < letterArray.length; i++){
//
// }

// function letterCount(string, char) {
//   var countMatches = str.match(/abc/g).length;
//   console.log(countMatches);
// }


// var countMatches = str.match(alphabet.js).length;

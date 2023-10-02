/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    return false;
  }

  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var dict = {};
  for (let i = 0; i < str1.length; ++i) {
    dict[str1[i]] = 1 + (str1[i] in dict ? dict[str1[i]] : 0);
  }

  for (let j = 0; j < str2.length; ++j) {
    if (str2[j] in dict && dict[str2[j]] > 0) {
      dict[str2[j]] -= 1;
    } else {
      return false;
    }
  }

  for (let i in dict) {
    if (dict[i] > 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;

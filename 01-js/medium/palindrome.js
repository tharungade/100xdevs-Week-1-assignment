/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (typeof str != "string") {
    return false;
  }

  str = str.toLowerCase();
  let n = str.length;
  let left = 0,
    right = n - 1,
    leftCharCode,
    rightCharCode;
  while (left < right) {
    leftCharCode = str.charCodeAt(left);
    if (!(leftCharCode > 96 && leftCharCode < 123)) {
      left++;
      continue;
    }
    rightCharCode = str.charCodeAt(right);
    if (!(rightCharCode > 96 && rightCharCode < 123)) {
      right--;
      continue;
    }
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;

/**
 *  Valid Palindrome
 *  Difficulty: Easy
 *
 * Given a string s, return true if it is a palindrome, otherwise return false.
 *
 * A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
 *
 * Example 1:
 * Input: s = "Was it a car or a cat I saw?"
 * Output: true
 */

const isPalindrome = (s) => {
  s = s.toLowerCase();
  let justWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/^[A-Z0-9a-z]/)) {
      justWord += s[i];
    }
  }

  let pointerA = 0;
  let pointerB = justWord.length - 1;

  while (pointerA < pointerB) {
    if (justWord[pointerA] !== justWord[pointerB]) {
      return false;
    }
    pointerA++;
    pointerB--;
  }
  return true;
};

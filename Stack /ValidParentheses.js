/**
 * Valid Parentheses
 * Difficulty - Easy
 *
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 * The input string s is valid if and only if:
 * 1. Every open bracket is closed by the same type of close bracket.
 * 2. Open brackets are closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Return true if s is a valid string, and false otherwise.
 *
 * Example 1:
 * Input: s = "[]"
 * Output: true
 *
 * Example 2:
 * Input: s = "([{}])"
 * Output: true
 *
 * Example 3:
 * Input: s = "[(])"
 * Output: false
 *
 * Example 4:
 * Input: s = "()[]{}"
 * Output: true;
 *
 * Thought: We probly know that if the length of the given string is odd -> false. The Idea of this problem may be we could
 * use two pointer idea, on at the beginning and the other one at the end, then keep moving 2 point at same time, then check
 * if they are match or not => this would not work for case number 4
 *
 * So we need to stack and take advantage of FIFO of stack, the idea is whenever we encounter closing bracket we need to consider to
 * pop out of the stack if they make open-close in same type, otherwise return false. If it is open bracket then we just need to
 * push it into stack
 *
 *
 */

const isValid = (s) => {
  let stack = [];
  const map = new Map([")", "("], ["]", "["], ["}", "{"]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // If encounter closing bracket
      if (stack.length > 0 && stack[stack.length - 1] === map.get(s[i])) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]); // push open bracket into a stack.
    }
  }

  return stack.length === 0;
};

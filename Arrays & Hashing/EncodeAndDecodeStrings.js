/**
 * Encode and Decode Strings
 * Difficulty: Medium
 *
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Example 1:
 * Input: ["neet","code","love","you"]
 * Output:["neet","code","love","you"]
 *
 * Example 2:
 * Input: ["we","say",":","yes"]
 * Output: ["we","say",":","yes"]
 *
 * Thought: The idea for encode is for each string we encode as "length" + # + str
 * so we when encode we just start from 0 until we saw '#' character (note that some
 * string might have a length that has more than 1 digit, e.g. 10 or 123) then we know
 * what the length is then use substring to grab the need str and start over.
 */

const encode = (strs) => {
  let res = "";
  for (const str of strs) {
    res += str.length + "#" + str;
  }
  return res;
};

// 2#we3#say1#:3#yes

const decode = (str) => {
  let res = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const currentLength = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + currentLength;
    res.push(str.substring(i, j));
    i = j;
  }
  return res;
};

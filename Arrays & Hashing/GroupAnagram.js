/*
 * Difficulty - Medium
 *
 * Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 *
 * Example 1:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 *
 * Example 2:
 * Input: strs = ["x"]
 * Output: [["x"]]
 *
 * Thought: We could use map as key value pairs.
 */

let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

const groupAnagrams = (str) => {
  let map = new Map();
  let result = [];

  for (const element of str) {
    const originalElement = element;
    const sortedElement = [...element].sort().join("");

    if (map.has(sortedElement)) {
      map.get(sortedElement).push(originalElement);
    } else {
      let arr = [originalElement];
      map.set(sortedElement, arr);
    }
  }

  for (const [key, value] of map) {
    result.push(value);
  }

  return result;
};

console.log(groupAnagrams(strs));

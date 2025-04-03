/*
 * Difficulty: Easy
 *
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 *
 * Example 1:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 *
 * Example 2:
 * Input: s = "jar", t = "jam"
 * Output: false
 *
 * Thought: This program can be done by iterating through each character of each string and record their frequency in HashMap
 * then we could compare two HashMap.
 */

let s = "racecar";
let t = "carrace";

const isAnagram = (str1, str2) => {
  let map1 = new Map();
  let map2 = new Map();

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    map1.set(str1[i], map1.get(str1) ? map1.get(str1) + 1 : 1);
    map1.set(str2[i], map2.get(str2) ? map2.get(str2) + 1 : 1);
  }

  for (const [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram(s, t));

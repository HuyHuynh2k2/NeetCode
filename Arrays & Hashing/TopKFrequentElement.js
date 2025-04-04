/*
 * Difficulty - Medium
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 * The test cases are generated such that the answer is always unique.
 * You may return the output in any order.
 *
 * Input: nums = [1,2,2,3,3,3], k = 2
 * Output: [2,3]
 *
 * Thought: We could use map to count the freqency of each element
 * then sort the array base on its frequency and get out k value at the end.
 */

const arr = [1, 2, 2, 3, 3, 3];
const value = 2;

const topKFrequent = (nums, k) => {
  let map = new Map();

  for (const element of nums) {
    map.set(element, map.get(element) ? map.get(element) + 1 : 1);
  }

  let sortedMap = new Map(
    [...map].sort(([, value1], [, value2]) => value2 - value1)
  );

  let temp = 1;
  let result = [];

  for (const [key, value] of sortedMap) {
    if (temp <= k) {
      result.push(key);
    }
    temp++;
  }

  return result;
};

console.log(topKFrequent(arr, value));

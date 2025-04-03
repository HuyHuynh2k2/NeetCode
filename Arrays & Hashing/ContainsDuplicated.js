/*
 * Difficulty: Easy
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 3]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 *
 * Thought: The idea of this problem is to find an element that already exist in the given array (exists more than 1 times),
 * we could use HashMap to store the frequency of each element and each time we put the element in the map we would
 * check if that element already exist or not.
 *
 * Time Complexity: O(N)
 */

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 3];

const hasDuplicate = (nums) => {
  let map = new Map();

  for (const element of nums) {
    if (map.has(element)) {
      return false;
    }
    map.set(element, 1);
  }

  return true;
};

console.log(hasDuplicate(arr1));
console.log(hasDuplicate(arr2));

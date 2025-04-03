/*
 * Difficulty: Easy
 *
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 *
 * Example 1:
 * Input: nums = [3,4,5,6], target = 7
 * Output: [0,1]
 *
 * Exampl 2:
 * Input: nums = [4,5,6], target = 10
 * Output: [0,2]
 *
 * Thought: The idea is to find the index of two number in the array that could add up to the target,
 * so we could use a HashMap to store the value of "Target - Current" as a Key and the Value would be it index,
 * and so we could keep iterating through the array as well as keep checking map to see if the Key if its match the current
 * value.
 *
 * Time Complexity: O(n)
 */

const nums = [3, 4, 5, 6];
const target = 7;

const twoSum = (theArray, theTarget) => {
  let map = new Map();

  for (let i = 0; i < theArray.length; i++) {
    if (map.has(theArray[i])) {
      return [i, map.get(theArray[i])];
    } else {
      map.set(theTarget - theArray[i], i);
    }
  }
  throw new Error("Not Found!");
};

console.log(twoSum(nums, target));

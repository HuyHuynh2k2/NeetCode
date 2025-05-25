/**
 * 3Sum
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i],
 * nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices
 * i, j and k are all distinct.
 *
 * The output should not contain any duplicate triplets.
 * You may return the output and the triplets in any order.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4] -> after sort [-4, -1, -1, 0, 1, 2]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Thought: We could think this problem as two sum problem, first we need to sort them
 * in order to us two pointer technique, then loop through the array and treat each index
 * we loop through as a target. so now we just need to find the the sum up value from
 * i + 1 to length - 1.
 */

/**
 * 3Sum
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i],
 * nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices
 * i, j and k are all distinct.
 *
 * The output should not contain any duplicate triplets.
 * You may return the output and the triplets in any order.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4] -> after sort [-4, -1, -1, 0, 1, 2]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Thought: We could think this problem as two sum problem, first we need to sort them
 * in order to us two pointer technique, then loop through the array and treat each index
 * we loop through as a target. so now we just need to find the the sum up value from
 * i + 1 to length - 1.
 */

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for `i`

    let target = -nums[i];
    let pointerA = i + 1;
    let pointerB = nums.length - 1;

    while (pointerA <= pointerB) {
      console.log(
        `${nums[pointerA]} + ${nums[pointerB]} and target is ${target}`
      );
      if (nums[pointerA] + nums[pointerB] === target) {
        let sub = [];
        sub.push(nums[i]);
        sub.push(nums[pointerA]);
        sub.push(nums[pointerB]);
        result.push(sub);

        pointerA++;
        pointerB--;
      } else if (nums[pointerA] + nums[pointerB] > target) {
        pointerB--;
      } else {
        pointerA++;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

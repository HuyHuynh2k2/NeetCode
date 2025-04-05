/*
 * Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
 * Each product is guaranteed to fit in a 32-bit integer.
 * Follow-up: Could you solve it in O(n) time without using the division operation?
 *
 * Input: nums = [1,2,4,6]
 * Output: [48,24,12,8]
 *
 * Thought we going to create 2 arrays (postfix and prefix and start multiply them together)
 */

const productExceptSelf = (nums) => {
  let prefix = [];
  let postfix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[0] = nums[0];
    } else {
      prefix[i] = prefix[i - 1] * nums[i];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix[i] = nums[nums.length - 1];
    } else {
      postfix[i] = postfix[i + 1] * nums[i];
    }
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result[i] = postfix[i + 1];
    } else if (i === nums.length - 1) {
      result[i] = prefix[i - 1];
    } else {
      result[i] = prefix[i - 1] * postfix[i + 1];
    }
  }

  return result;
};

let nums = [1, 2, 4, 6];

console.log(productExceptSelf(nums));

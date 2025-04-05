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
  let prefix = [nums[0]];
  let postfix = [];
  for (let k = 0; k < nums.length - 2; k++) {
    postfix[k] = 0;
  }
  postfix[nums.length - 1] = [nums[nums.length - 1]];

  for (let i = 1; i < nums.length; i++) { 
    prefix[i] = prefix[i - 1] * nums[i];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    postfix[j] = postfix[j + 1] * nums[j];
  }

  console.log(postfix);
  console.log(prefix);
};

let nums = [1, 2, 4, 6];
productExceptSelf(nums);

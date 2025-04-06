/**
 * Longest Consecutive Sequence
 * Difficulty - Medium
 *
 * Given an array of integers nums, return the length of the longest consecutive
 * sequence of elements that can be formed.
 *
 *
 * A consecutive sequence is a sequence of elements in which each element is exactly
 * 1 greater than the previous element. The elements do not have to be consecutive in the original array.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Input: nums = [2,20,4,10,3,4,5]
 * Output: 4
 * Explanation: The longest consecutive sequence is [2, 3, 4, 5].
 *
 *
 * Thought: Since it said that it need to run in O(n), so if we sorted it then start
 * from there it likely cost O(nlog(n)) for merge sort technique in Worst Case.
 *
 * The best way to solve this problem is using a set, and we have to make sure that
 * for every element that we iterate through, we need to make sure that there no verson
 * of it number - 1, which mean if we current has value 2 then we have to make sure that
 * we dont have value 1 anywhere in the list, after making that sure then we start finding
 * it next value of the current of it exist.
 *
 * Time Complexity: O(n)
 */

const longestConsecutive = (nums) => {
  let set = new Set();
  let result = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      // make sure that we start at the small ele in case there is a streak
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
    }
    result = Math.max(result, length);
  }

  return result;
};

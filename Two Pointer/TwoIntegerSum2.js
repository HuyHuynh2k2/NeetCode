/**
 * Two Integer Sum II
 * Difficulty: Medium
 *
 * Given an array of integers numbers that is sorted in non-decreasing order.
 * Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given
 * target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you
 * may not use the same element twice.
 */

const twoSum = (numbers, target) => {
  let pointerA = 0;
  let pointerB = numbers.length - 1;

  while (pointerA < pointerB) {
    let current = numbers[pointerA] + numbers[pointerB];

    if (current < target) {
      pointerA++;
    } else if (current > target) {
      pointerB--;
    } else {
      return [pointerA + 1, pointerB + 1];
    }
  }
};

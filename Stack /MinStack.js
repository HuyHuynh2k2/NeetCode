/**
 * Minimum Stack
 * Difficulty - Medium
 *
 * Design a stack class that supports the push, pop, top, and getMin operations.
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 *
 * Each function should return in O(1) time
 */

class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    let min = Number.MAX_VALUE;
    while (this.stack.length > 0) {
      let currentValue = this.stack.pop();
      min = Math.min(currentValue);
    }

    return min;
  }
}

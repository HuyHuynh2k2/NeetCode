/**
 * Evaluate Reverse Polish Notation
 *
 * You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
 *
 * Return the integer that represents the evaluation of the expression.
 *
 * Example: Input: tokens = ["1","2","+","3","*","4","-"]
 * Output: 5
 * Explanation: ((1 + 2) * 3) - 4 = 5
 *
 * Thought: handle from left to right,
 */

const evalRPN = (tokens) => {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isExpression(tokens[i])) {
      // Pop two operands from the stack
      let b = stack.pop();
      let a = stack.pop();

      // Apply the operator
      let result = 0;
      switch (tokens[i]) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(a / b); // Use Math.trunc to handle integer division
          break;
      }

      // Push the result back to the stack
      stack.push(result);
    } else {
      // It's a number, so push it to the stack
      stack.push(Number(tokens[i]));
    }
  }

  // The result is the only element left in the stack
  return stack.pop();
};

const isExpression = (element) => {
  return (
    element === "+" || element === "-" || element === "*" || element === "/"
  );
};

// Example usage:
const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens)); // Output: 9

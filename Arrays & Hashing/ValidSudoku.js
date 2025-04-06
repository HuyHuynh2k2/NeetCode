/**
 * Valid Sodoku
 * Difficulty - Medium
 *
 * You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
 * Each row must contain the digits 1-9 without duplicates.
 * Each column must contain the digits 1-9 without duplicates.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
 *
 * Return true if the Sudoku board is valid, otherwise return false
 *
 * Thought: I think using set to store the existence of the current character
 * is one way to go, for example we would store "element 1 in row 1 column 1" or so
 */

const isValidSudoku = (board) => {
  let set = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] !== ".") {
        let rowCheck = `${board[row][col]} in row ${row}`;
        let colCheck = `${board[row][col]} in col ${col}`;
        let tableCheck = `${board[row][col]} in the table of ${Math.floor(
          row / 3
        )} x ${Math.floor(col / 3)}`;

        if (set.has(rowCheck) || set.has(colCheck) || set.has(tableCheck)) {
          return false;
        } else {
          set.add(rowCheck);
          set.add(colCheck);
          set.add(tableCheck);
        }
      }
    }
  }
  return true;
};

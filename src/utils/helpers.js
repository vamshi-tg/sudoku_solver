const getCurrentNumbersInRow = (row, board) => {
  const numbers = [];
  const length = board.length;

  for (let i = 0; i < length; i++) {
    const number = board[row][i];
    if (number != null) {
      numbers.push(number);
    }
  }
  return numbers;
};

const getCurrentNumbersInCol = (col, board) => {
  const numbers = [];
  const length = board.length;

  for (let i = 0; i < length; i++) {
    const number = board[i][col];
    if (number != null) {
      numbers.push(number);
    }
  }
  return numbers;
};

const getCurrentNumbersInSubGrid = (row, col, board) => {
  const numbers = [];

  const rowStart = Math.trunc(row / 3) * 3;
  const colStart = Math.trunc(col / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      const number = board[i][j];
      if (number != null) {
        numbers.push(number);
      }
    }
  }
  return numbers;
};

export const getInvalidNumbersForCurrentPos = (row, col, board) => {
  const currentNumbersInRow = getCurrentNumbersInRow(row, board);
  const currentNumbersInCol = getCurrentNumbersInCol(col, board);
  const currentNumbersInSubGrid = getCurrentNumbersInSubGrid(row, col, board);

  // union
  return [...new Set([...currentNumbersInRow, ...currentNumbersInCol, ...currentNumbersInSubGrid])];
};

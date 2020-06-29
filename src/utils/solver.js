function isSubGridSafe(board, pos, num) {
  let rowStart = parseInt(pos.row / 3) * 3;
  let colStart = parseInt(pos.col / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function isRowSafe(board, pos, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[pos.row][i] === num) {
      return false;
    }
  }
  return true;
}

function isColSafe(board, pos, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][pos.col] === num) {
      return false;
    }
  }
  return true;
}

function isSafePos(board, pos, num) {
  return isRowSafe(board, pos, num) && isColSafe(board, pos, num) && isSubGridSafe(board, pos, num);
}

function getUnfilledPos(board) {
  const boardSize = board.length;
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (board[row][col] === null) {
        return { row, col };
      }
    }
  }
  return null;
}

function solveSudoku(board, pos) {
  if (pos === null) {
    return true;
  }

  for (let num = 1; num <= 9; num++) {
    if (isSafePos(board, pos, num)) {
      board[pos.row][pos.col] = num;

      let next_pos = getUnfilledPos(board);
      if (solveSudoku(board, next_pos)) {
        return true;
      }

      board[pos.row][pos.col] = null;
    }
  }
  return false;
}

export function solver(board) {
  const initialPos = getUnfilledPos(board);
  return solveSudoku(board, initialPos) ? board : null;
}

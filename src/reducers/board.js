import produce from 'immer';

import { BOARD_SIZE } from '@/utils/constants';
import { UPDATE_NUMBER_IN_BOARD, RESET_BOARD } from '@/actions';

// const initialBoardOne= [
//   [1, 9, 5, null, 8, 9, null, 4, 8],
//   [null, 9, null, 1, 4, 2, null, null, 0],
//   [8, 3, 4, null, 4, null, 6, 6, 8],
//   [2, 7, null, 5, 2, 6, 8, null, 3],
//   [null, 2, 1, 9, null, 8, 9, null, 9],
//   [0, null, 0, 4, null, 5, null, 5, 6],
//   [null, 2, null, 4, null, 1, 6, null, 4],
//   [9, null, 9, 4, 0, 2, 4, null, 3],
//   [5, 5, null, 8, 7, null, 1, 9, 5],
// ];

const initialBoard = () => {
  let initialBoard = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    initialBoard.push([null, null, null, null, null, null, null, null, null]);
  }
  return initialBoard;
};

const board = produce((draftBoard, action) => {
  switch (action.type) {
    case UPDATE_NUMBER_IN_BOARD: {
      const { rowIndex, colIndex, number } = action.payload;
      draftBoard[rowIndex][colIndex] = number;
      return;
    }
    case RESET_BOARD:
      return initialBoard();
  }
}, initialBoard());

export default board;

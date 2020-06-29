import produce from 'immer';

import { BOARD_SIZE } from '@/utils/constants';
import { UPDATE_NUMBER_IN_BOARD, RESET_BOARD, UPDATE_BOARD } from '@/actions';

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
      return draftBoard;
    }
    case UPDATE_BOARD: {
      draftBoard = action.payload.board;
      return draftBoard;
    }
    case RESET_BOARD:
      return initialBoard();
  }
}, initialBoard());

export default board;

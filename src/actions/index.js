import { solver } from '@/utils/solver';

export const SET_IS_SOLVING = 'set_is_solving';
export const UPDATE_NUMBER_IN_BOARD = 'update_number_in_board';
export const RESET_BOARD = 'reset_board';
export const UPDATE_BOARD = 'update_board';

/*
 * Simple Action Creators
 */
export const setIsSolving = (isSolving) => {
  return {
    type: SET_IS_SOLVING,
    isSolving,
  };
};

export const updateNumberOnBoard = ({ number, rowIndex, colIndex }) => {
  return {
    type: UPDATE_NUMBER_IN_BOARD,
    payload: { number, rowIndex, colIndex },
  };
};

export const resetBoard = () => {
  return {
    type: RESET_BOARD,
  };
};

export const updateBoard = (board) => {
  return {
    type: UPDATE_BOARD,
    payload: { board },
  };
};

/*
 * Redux Thunks
 */
export const solveBoard = () => {
  return (dispatch, getState) => {
    const { board } = getState();
    const boardCopy = board.map((row) => [...row]);

    const result = solver(boardCopy);
    if (result) {
      dispatch(updateBoard(result));
    } else {
      window.alert('No Solution for sudoku board');
    }
  };
};

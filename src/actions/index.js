export const SET_IS_SOLVING = 'set_is_solving';
export const UPDATE_NUMBER_IN_BOARD = 'update_number_in_board';
export const RESET_BOARD = 'reset_board';

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

export const solveBoard = () => {
  return (dispatch) => {
    dispatch(resetBoard());
  }
};

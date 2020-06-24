const initialState = {
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Dummy':
      break;
    default:
      return state;
  }
};

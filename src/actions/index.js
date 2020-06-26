const SET_IS_SOLVING = 'set_is_solving';

const setIsSolving = (isSolving) => {
  return {
    type: SET_IS_SOLVING,
    isSolving,
  };
};

export { setIsSolving };

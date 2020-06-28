import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { resetBoard } from '@/actions';

const Options = () => {
  const dispatch = useDispatch();

  const _resetBoard = () => dispatch(resetBoard());

  return (
    <div>
      <button>Solve</button>
      <button onClick={() => _resetBoard()}>Reset</button>
    </div>
  );
};

export default connect()(Options);

import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { generatePuzzle, resetBoard, solveBoard } from '@/actions';
import { getRandomPuzzle } from '@/utils/unsolvedPuzzles';

const Options = () => {
  const dispatch = useDispatch();

  const _generatePuzzle = () => {
    dispatch(generatePuzzle(getRandomPuzzle()));
  };
  const _resetBoard = () => dispatch(resetBoard());
  const _solveBoard = () => dispatch(solveBoard());

  return (
    <div className="options-container">
      <div>
        <button onClick={() => _generatePuzzle()}>Generate Puzzle</button>
      </div>
      <div>
        <button onClick={() => _solveBoard()}>Solve</button>
      </div>
      <div>
        <button onClick={() => _resetBoard()}>Reset</button>
      </div>
    </div>
  );
};

export default connect()(Options);

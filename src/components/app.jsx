import React from 'react';

import Board from '@/components/Board/Board';
import Options from '@/components/Board/Options';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sudoku Solver</p>
        <Board />
        <Options />
      </header>
    </div>
  );
};

export default App;

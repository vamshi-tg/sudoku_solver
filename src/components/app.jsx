import React from 'react';

import Board from '@/components/Board/Board';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sudoku Solver</p>
        <Board />
      </header>
    </div>
  );
};

export default App;

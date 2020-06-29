import React from 'react';

import Board from '@/components/Board/Board';
import Options from '@/components/Board/Options';

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <header>Sudoku Solver</header>
        <Board />
        <Options />
      </div>
    </div>
  );
};

export default App;

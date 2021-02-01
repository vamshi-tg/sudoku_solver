import React from 'react';

import Board from '@/components/Board/Board';
import Options from '@/components/Board/Options';

const App = () => {
  return (
    <div className="app">
      <header className="app-header-container">
        <div className="app-header--logo">Sudoku Solver</div>
      </header>
      <article className="app-content-container">
        <div className="app-content">
          <Board />
          <Options />
        </div>
      </article>
    </div>
  );
};

export default App;

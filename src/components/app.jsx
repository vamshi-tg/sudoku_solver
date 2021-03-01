import React from 'react';

import Board from '@/components/Board/Board';
import Options from '@/components/Board/Options';

import Image from '../assets/images/logo.svg';

const App = () => {
  return (
    <div className="app">
      <header className="app-header-container">
        <Image className="app-header--logo-img" height="40px" width="40px" />
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

import React from 'react';
import { connect } from 'react-redux';

const renderBoard = (board) => {
  return board.map((row) => {
    return (
      <div>
        {row.map((num) => (
          <span> {num} </span>
        ))}
      </div>
    );
  });
};

const App = ({ _, board }) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {renderBoard(board)}
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps)(App);

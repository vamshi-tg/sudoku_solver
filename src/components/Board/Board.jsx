import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoardItem from '@/components/Board/BoardItem';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  getRows(board) {
    return board.map((row, rowIndex) => {
      return row.map((item, itemIndex) => {
        const id = `${rowIndex}, ${itemIndex}`;
        return <BoardItem rowIndex={rowIndex} colIndex={itemIndex} value={item} key={`${id}`} />;
      });
    });
  }

  render() {
    const { board } = this.props;
    return (
      <div className="sudoku-grid">
        <div className="board-container">{this.getRows(board)}</div>
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
};

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps)(Board);

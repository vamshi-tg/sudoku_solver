import React from 'react';
import PropTypes from 'prop-types';

const BoardItem = (props) => {
  const id = `${props.rowIndex}, ${props.colIndex}`;
  return (
    <div className="board-item" data-pos={`[${id}]`} onClick={() => window.alert(`Clicked ${id}`)}>
      {props.value}
    </div>
  );
};

BoardItem.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  value: PropTypes.number,
};

export default BoardItem;

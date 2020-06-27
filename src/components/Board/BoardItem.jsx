import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const NumberPicker = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numbers.map((number, index) => {
    return (
      <div key={index} className="cell">
        {number}
      </div>
    );
  });
};

const BoardItem = (props) => {
  const id = `${props.rowIndex}, ${props.colIndex}`;
  const item = (
    <div className="board-item" data-pos={`[${id}]`}>
      {props.value}
    </div>
  );
  return (
    <Popup trigger={item} modal closeOnDocumentClick>
      {(close) => (
        <div className="number-picker-modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="container">
            <NumberPicker />
          </div>
        </div>
      )}
    </Popup>
  );
};

BoardItem.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  value: PropTypes.number,
};

export default BoardItem;

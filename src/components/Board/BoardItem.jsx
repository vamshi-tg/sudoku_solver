import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

import NumberPicker from '@/components/Board/NumberPicker';

const BoardItem = (props) => {
  const { rowIndex, colIndex, value } = props;
  const id = `${rowIndex}, ${colIndex}`;
  const item = (
    <div className="board-item" data-pos={`[${id}]`}>
      {value}
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
            <NumberPicker row={rowIndex} col={colIndex} />
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

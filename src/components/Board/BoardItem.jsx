import React from 'react';
import PropTypes from 'prop-types';

import { NumberPickerPopup } from '@/components/Board/NumberPicker';

const BoardItem = (props) => {
  const { rowIndex, colIndex, value } = props;
  const id = `${rowIndex}, ${colIndex}`;
  const item = (
    <div className="board-item" data-pos={`[${id}]`}>
      {value}
    </div>
  );

  return <NumberPickerPopup triggerElement={item} row={rowIndex} col={colIndex} />;
};

BoardItem.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  value: PropTypes.number,
};

export default BoardItem;

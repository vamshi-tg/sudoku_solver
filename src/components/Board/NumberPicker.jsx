import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';

import { getInvalidNumbersForCurrentPos } from '@/utils/helpers';
import { updateNumberOnBoard } from '@/actions';

let NumberPicker = (props) => {
  const { row, col, board, dispatch, close } = props;
  const invalidNumbers = getInvalidNumbersForCurrentPos(row, col, board);

  const _updateNumberOnBoard = (number, rowIndex, colIndex) => {
    dispatch(updateNumberOnBoard({ rowIndex, colIndex, number }));
    close();
  };

  const _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return _numbers.map((number, index) => {
    const cssClasses = invalidNumbers.includes(number) ? 'cell-disabled' : 'cell';
    return (
      <div
        key={index}
        className={cssClasses}
        onClick={(_) => _updateNumberOnBoard(number, row, col)}
      >
        {number}
      </div>
    );
  });
};

NumberPicker.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
  row: PropTypes.number,
  col: PropTypes.number,
};

const mapStateToProps = (state) => ({
  board: state.board,
});

NumberPicker = connect(mapStateToProps)(NumberPicker);

/*
 * Number Picker Pop up
 */
export const NumberPickerPopup = (props) => {
  const { triggerElement, ...otherProps } = props;
  return (
    <Popup
      trigger={triggerElement}
      closeOnDocumentClick
      position={['top center', 'bottom right', 'bottom left']}
    >
      {(close) => (
        <div className="number-picker-modal">
          <div className="container">
            <NumberPicker {...otherProps} close={close} />
          </div>
        </div>
      )}
    </Popup>
  );
};

NumberPickerPopup.propTypes = {
  triggerElement: PropTypes.element,
  row: PropTypes.number,
  col: PropTypes.number,
  close: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';

import { getInvalidNumbersForCurrentPos } from '@/utils/helpers';
import { updateNumberOnBoard } from '@/actions';

let NumberPicker = (props) => {
  const { row, col, board, dispatch } = props;
  const invalidNumbers = getInvalidNumbersForCurrentPos(row, col, board);

  const _updateNumberOnBoard = (number, rowIndex, colIndex) => {
    dispatch(updateNumberOnBoard({ rowIndex, colIndex, number }));
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
    <Popup trigger={triggerElement} modal closeOnDocumentClick>
      {(close) => (
        <div className="number-picker-modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="container">
            <NumberPicker {...otherProps} />
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
};

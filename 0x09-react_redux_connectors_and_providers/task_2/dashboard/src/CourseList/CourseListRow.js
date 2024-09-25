import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
  const [isChecked, setIsChecked] = useState(false);

  const className = css(
    isHeader? styles.headerRow : styles.defaultRow,
    textSecondCell && styles.textAlign,
    isChecked && styles.rowChecked
  )

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <tr className={className}>
      {isHeader? (
        !textSecondCell ? (
        <th colSpan={2}>{textFirstCell}</th> 
        ) : (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
        )
        ) : (
        <>
          <td><input type='checkbox' onChange={handleCheckboxChange}/> {textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
        )}
    </tr>
  );
}
 
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab'
  },
  headerRow: {
    backgroundColor: '#deb5b545'
  },
  textAlign: {
    textAlign: 'left'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
  const className = css(
    isHeader? styles.headerRow : styles.defaultRow,
    textSecondCell && styles.textAlign
  )
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
          <td>{textFirstCell}</td>
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
  }
});

export default CourseListRow;

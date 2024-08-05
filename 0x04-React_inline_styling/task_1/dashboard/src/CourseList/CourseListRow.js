import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
  return (
    <tr className={css(isHeader? styles.headerRowStyle : styles.rowDefaultStyle)}>
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
  rowDefaultStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  headerRowStyle: {
    backgroundColor: '#deb5b545'
  }
});

export default CourseListRow;

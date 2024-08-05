import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
  const rowDefaultStyle = {backgroundColor: '#f5f5f5ab'};
  const headerRowStyle = {backgroundColor: '#deb5b545'};
  return (
    <tr style={ isHeader? headerRowStyle : rowDefaultStyle }>
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

export default CourseListRow;

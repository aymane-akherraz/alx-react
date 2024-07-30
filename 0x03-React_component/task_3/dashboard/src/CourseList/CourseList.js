import React from 'react';
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';
import './CourseList.css'
import CourseShape from './CourseShape';

const CourseList = ({ listCourses = []}) => {
  return ( 
    <table id="CourseList">
      {listCourses.length > 0? (
        <>
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
          </thead>
          <tbody>
            {listCourses.map((e) => {
              return <CourseListRow key={e.id} textFirstCell={e.name} textSecondCell={e.credit} />
            })}
          </tbody>
        </>
      ) : (
        <tr>No course available yet</tr>
      )}
    </table>
  );
}
 
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;
import React from 'react';
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses = []}) => {
  return ( 
    <table className={css(styles.courseList)}>
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
        <CourseListRow textFirstCell='No course available yet' />
      )}
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  courseList :{
    width: '100%',
    border: '1px solid #ccc'
  }
});

export default CourseList;

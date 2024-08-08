import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('CourseList Component', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });
  it('renders five <tr> tags', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
  it("renders correctly if you pass an empty array or if you don't pass the listCourses property", () => {
    shallow(<CourseList listCourses={[]} />);
    shallow(<CourseList />);
  });
  it('renders correctly with a list of courses', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
    shallow(<CourseList listCourses={listCourses} />);
  });
});

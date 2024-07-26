import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });
  it('renders five <tr> tags', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});

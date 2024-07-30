import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('isHeader is set to true', () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="ES6"/>);
    const thElement = wrapper.find('th');
    expect(thElement.length).toBe(1);
    expect(thElement.prop('colSpan')).toBe(2);
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="ES6" textSecondCell="60" />);
    expect(wrapper.find('th').length).toBe(2);
  });
  it('isHeader is set to false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6"/>);
    const trElement = wrapper.find('tr');
    expect(trElement.length).toBe(1);
    expect(trElement.find('td').length).toBe(2);
  });
});

import React, { Children } from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';


describe('BodySectionWithMarginBottom Component', () => {
  it('Renders correctly a BodySection component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>);
    const child = wrapper.find(BodySection);
    expect(child).toHaveLength(1);
    expect(child.props().title).toEqual("test title");
    expect(child.props().children).toEqual(<p>test children node</p>);
  });
})

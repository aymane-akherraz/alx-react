import React from 'react';
import BodySection from "./BodySection";
import { shallow } from 'enzyme';


describe('BodySection Component', () => {
  it('Renders correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title="test title">
      <p>test children node</p>
    </BodySection>);
    expect(wrapper.find('h2').text()).toContain('test title');
    expect(wrapper.find('p').text()).toContain('test children node');
  });
})
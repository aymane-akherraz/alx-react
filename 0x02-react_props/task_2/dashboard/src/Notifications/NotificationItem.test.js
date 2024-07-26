import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });
  it('renders props well when passed in', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });
  it('renders HTML content correctly when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
})
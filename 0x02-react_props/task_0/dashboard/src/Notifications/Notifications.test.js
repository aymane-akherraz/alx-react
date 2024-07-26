import React from 'react';
import { shallow } from 'enzyme';
import GetNotifs from '../Notifications/Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<GetNotifs />);
  });
  it('renders three <li> elements', () => {
    const wrapper = shallow(<GetNotifs />);
    expect(wrapper.find('li')).toHaveLength(3);
  });
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<GetNotifs />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});

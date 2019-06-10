import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Snapshot from './components/Snapshot';
import Props from './components/Props';

configure({ adapter: new Adapter() });

describe('App />', () => {
  const wrapper = shallow(<App />);
  it('should contain one h1 element', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('className .App should exist', () => {
    expect(wrapper.find('.App').exists()).toBe(true);
  });
});

describe('<Snapshot />', () => {
  it('component should match snapshot', () => {
    const wrapper = shallow(<Snapshot />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Props />', () => {
  it('component accepts address prop', () => {
    const wrapper = shallow(<Props name='name' />);
    expect(wrapper.instance().props.name).toBe('name');
  });
});

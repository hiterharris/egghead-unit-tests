import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Snapshot from './components/Snapshot';
import Props from './components/Props';

configure({ adapter: new Adapter() });

describe('App /> shallow rendering', () => {
  const wrapper = shallow(<App />);
  it('should contain one h1 element', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('className .App should exist', () => {
    const tree = shallow(<App />);
    expect(tree.find('.App').exists()).toBe(true);
  });
});

describe('App /> mount rendering', () => {
  const wrapper = mount(<App />);
  it('should contain one h1 element', () => {
    expect(wrapper.find('h1').length).toBe(2);
    wrapper.unmount();
  });
  it('className .App should exist', () => {
    const tree = mount(<App />);
    expect(tree.find('.App').exists()).toBe(true);
    tree.unmount();
  });
  it('on button click changes p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
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

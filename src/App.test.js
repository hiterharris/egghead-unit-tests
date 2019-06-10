import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App />', () => {
  const wrapper = shallow(<App />);
  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});

describe('App />', () => {
  const wrapper = shallow(<App />);
  it('className .App should exist', () => {
    expect(wrapper.find('.App').exists()).toBe(true);
  });
});

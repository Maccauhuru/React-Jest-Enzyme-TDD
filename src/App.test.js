import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Render App Without Crashing Again', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test('Increment Button Rendering', () => {

});

test('Render Counter Display', () => {

});

test('Counter Starts at 0', () => {

});

test('Button Increments by 1 On Click (in display NOT in state)', () => {

});
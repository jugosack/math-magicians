import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import App from './App';

const MockHeader = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

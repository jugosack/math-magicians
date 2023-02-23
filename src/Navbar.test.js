import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

const MockHeader = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

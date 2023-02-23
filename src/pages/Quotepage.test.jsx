import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quote from './Quotepage';

test('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

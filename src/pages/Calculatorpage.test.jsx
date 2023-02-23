import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import CalculatorPage from './Calculatorpage';

test('renders correctly', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

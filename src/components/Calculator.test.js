import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('snapshot testing', () => {
  it('first snapshot', () => {
    const itemRender = renderer.create(<Calculator />).toJSON();
    expect(itemRender).toMatchSnapshot();
  });
});

describe('Calculator item', () => {
  it('testing item', () => {
    render(<Calculator />);
    const ele = screen.getByTestId('calculatorTest');
    expect(ele).toBeInTheDocument();

    const td0 = screen.getByDisplayValue('AC');
    expect(td0).toHaveDisplayValue('AC');

    const td1 = screen.getByDisplayValue('+/-');
    expect(td1).toHaveDisplayValue('+/-');

    /// / Add additional Test ///
  });
});

describe('Rendering Buttons in Calculator', () => {
  it('rendering correct button', () => {
    const { getAllByDisplayValue } = render(<Calculator />);
    getAllByDisplayValue('AC');
    getAllByDisplayValue('+');
    getAllByDisplayValue('-');
    getAllByDisplayValue('x');
    
    /// /Add Test By John ////
  });
});

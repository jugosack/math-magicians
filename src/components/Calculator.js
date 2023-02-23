import './Calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Input from './Input';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  function handleClick(e) {
    const { value } = e.target;
    setCalculatorObj(calculate(calculatorObj, value));
  }

  let result;

  if (calculatorObj.next) {
    result = calculatorObj.next;
  } else if (calculatorObj.total) {
    result = calculatorObj.total;
  } else {
    result = 0;
  }

  return (
    <>
      <div className="space" />
      <div className="container" data-testid="calculatorTest">

        <table>
          <tr className="result1">
            <td colSpan={4}>{result}</td>
          </tr>

          <tr>
            <td><Input onClick={(e) => handleClick(e)} value="AC" className="global first-row" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="+/-" className="global first-row" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="%" className="global first-row" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="÷" className="global first-row" id="slash" /></td>
          </tr>
          <tr>
            <td><Input onClick={(e) => handleClick(e)} value="7" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="8" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="9" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="x" className="global" id="ex" /></td>
          </tr>
          <tr>
            <td><Input onClick={(e) => handleClick(e)} value="4" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="5" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="6" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="-" className="global" id="minus" /></td>
          </tr>
          <tr>
            <td><Input onClick={(e) => handleClick(e)} value="1" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="2" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="3" className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="+" className="global" id="plus" /></td>
          </tr>
          <tr>
            <td colSpan="2"><Input onClick={(e) => handleClick(e)} value="0" className="global grey" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="." className="global" /></td>
            <td><Input onClick={(e) => handleClick(e)} value="=" className="global" id="equal" /></td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Calculator;

import './Calculator.scss';

function Calculator() {
  return (
    <>
      <div className="space" />
      <div className="container">

        <table>
          <tr className="result1">
            <td colSpan={4}> 0</td>
          </tr>

          <tr>
            <td><input type="button" value="AC" className="global first-row" /></td>
            <td><input type="button" value="+/-" className="global first-row" /></td>
            <td><input type="button" value="%" className="global first-row" /></td>
            <td><input type="button" value="÷" className="global first-row" id="slash" /></td>
          </tr>
          <tr>
            <td><input type="button" value="7" className="global" /></td>
            <td><input type="button" value="8" className="global" /></td>
            <td><input type="button" value="9" className="global" /></td>
            <td><input type="button" value="x" className="global" id="ex" /></td>
          </tr>
          <tr>
            <td><input type="button" value="4" className="global" /></td>
            <td><input type="button" value="5" className="global" /></td>
            <td><input type="button" value="6" className="global" /></td>
            <td><input type="button" value="-" className="global" id="minus" /></td>
          </tr>
          <tr>
            <td><input type="button" value="1" className="global" /></td>
            <td><input type="button" value="2" className="global" /></td>
            <td><input type="button" value="3" className="global" /></td>
            <td><input type="button" value="+" className="global" id="plus" /></td>
          </tr>
          <tr>
            <td colSpan="2"><input type="button" value="0" className="global grey" /></td>
            <td><input type="button" value="." className="global" /></td>
            <td><input type="button" value="=" className="global" id="equal" /></td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Calculator;

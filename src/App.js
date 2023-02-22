/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Homepage';
import CalculatorPage from './pages/Calculatorpage';
import Quote from './pages/Quotepage';

function App() {
  return (
    <>
      <Navbar />
      <div className="container_1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculatorpage" element={<CalculatorPage />} />
          <Route path="/qoutepage" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

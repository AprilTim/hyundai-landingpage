import React from 'react';
import terms from '../img/terms.png';

const App = () => (
  <div className="terms">
    <div className="container">
      <ul>
        <li>
          <img src={terms} />
          0% admin fee
        </li>
        <li>
          <img src={terms} />
          Comprehensive insurance covering the entire lease period
        </li>
        <li>
          <img src={terms} />
          Terms and conditions applicable as per the leasing company
        </li>
        <li>
          <img src={terms} />5 years / 100,000 Km Manufacturer Warranty
        </li>
        <li>
          <img src={terms} />1 year Road Side Assistance
        </li>
        <li>
          <img src={terms} />
          The monthly installment advertised includes Value Added Tax
        </li>
      </ul>
    </div>
  </div>
);

export default App;

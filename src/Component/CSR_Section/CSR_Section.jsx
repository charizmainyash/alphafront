import React from 'react';
import './csr.css'; // Import the CSS file for styling

export const EmpoweringChange = () => {
  return (
    <div className="empowering-change-container">
      <h1 className={`csr_heading text-center text-8xl font-bold `} style={{ margin: '40px 0', color: 'white' }}>
        EMPOWERING CHANGE
    </h1>
    <div className="empowering-change-content text-center">
      <p>Every Purchase Contributes to a Better World.</p>
      <p>
      <strong>5% OF OUR PROFITS</strong> Are Donated to Support NGOs and Social Welfare Initiatives.
      </p>
    </div>
    </div>
  );
};
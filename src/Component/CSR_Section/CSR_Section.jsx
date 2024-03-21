import React from 'react';
import './csr.css'; // Import the CSS file for styling

export const EmpoweringChange = () => {
  return (
    <div className="empowering-change-container">
      <h1 className={`csr_heading text-center text-8xl font-bold `} style={{ margin: '40px 0', color: 'white' }}>
        EMPOWERING CHANGE
    </h1>
    <div className="empowering-change-content text-center">
      <p>Every purchase contributes to a better world.</p>
      <p>
      <strong>5% OF OUR PROFITS</strong> are donated to support NGOs and Social welfare initiatives.
      </p>
    </div>
    </div>
  );
};
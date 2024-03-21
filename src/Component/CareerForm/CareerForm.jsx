import React, { useState } from 'react';
import './CareerForm.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

export const CareerForm = () => {
  const [name, setName] = useState('');
  const [jobId, setJobId] = useState('');


  const id=useParams();
  console.log(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Job ID:', jobId);
    // Here you can perform further actions like submitting the data to a server
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobId" className="form-label">Job ID:</label>
          <input
            type="text"
            id="jobId"
            value={id.id}
            onChange={(e) => setJobId(e.target.value)}
            className="form-input"
            readOnly
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};



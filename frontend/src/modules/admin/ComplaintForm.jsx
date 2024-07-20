import './Complaint.css'; 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ComplaintForm() {
  const [complaint, setComplaint] = useState('');
  const [category, setCategory] = useState('General');
  const [subcategory, setSubcategory] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [submissionTime, setSubmissionTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      document.body.classList.add('background-gradient');
    }
    return () => {
      document.body.classList.remove('background-gradient');
    };
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    setSubmissionTime(now.toLocaleString());
    setIsSubmitted(true);
    setFormData({
      complaint,
      category,
      subcategory,
      urgency,
      submissionTime: now.toLocaleString(),
    });
    // Optionally send form data to backend here
    alert('Thanks for contacting us! We will be in touch with you shortly.');
  };

  const handleViewStatus = () => {
    navigate('/complaints', { state: { formData } });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit} className="complaint-form">
      <h2>Submit a Complaint</h2>

      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Describe your complaint"
        maxLength="500"
        required
        className="complaint-textarea"
      />

      <div className="category-box">
        <h3>Category</h3>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory('');
          }}
          className="category-select"
        >
          <option value="General">General</option>
          <option value="Technical">Technical</option>
          <option value="Billing">Billing</option>
        </select>
      </div>

      {category === 'Technical' && (
        <div className="subcategory-box">
          <h3>Technical Subcategory</h3>
          <label>
            <input
              type="radio"
              value="Software"
              checked={subcategory === 'Software'}
              onChange={(e) => setSubcategory(e.target.value)}
            />
            Software
          </label>
          <label>
            <input
              type="radio"
              value="Hardware"
              checked={subcategory === 'Hardware'}
              onChange={(e) => setSubcategory(e.target.value)}
            />
            Hardware
          </label>
        </div>
      )}

      {category === 'Billing' && (
        <div className="subcategory-box">
          <h3>Billing Subcategory</h3>
          <label>
            <input
              type="radio"
              value="Payment"
              checked={subcategory === 'Payment'}
              onChange={(e) => setSubcategory(e.target.value)}
            />
            Payment
          </label>
          <label>
            <input
              type="radio"
              value="Invoice"
              checked={subcategory === 'Invoice'}
              onChange={(e) => setSubcategory(e.target.value)}
            />
            Invoice
          </label>
        </div>
      )}

      <div className="urgency-box">
        <h3>Urgency</h3>
        <select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="urgency-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button 
        type="submit" 
        className={`submit-button ${isSubmitted ? 'submitted' : ''}`}
      >
        Submit
      </button>

      {submissionTime && <p className="submission-time">Submitted on: {submissionTime}</p>}

      <div className="actions">
        <button type="button" onClick={handleViewStatus} className="view-status-button">
          View Status
        </button>
        <button type="button" onClick={handleRegister} className="register-button">
          Register New Account
        </button>
      </div>
    </form>
  );
}

export default ComplaintForm;

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ComplaintsPage.css'; // Make sure to import the CSS file

function ComplaintsPage() {
  const location = useLocation();
  const { formData } = location.state || {};

  // Determine status based on urgency
  const getStatus = (urgency) => {
    if (urgency === 'High') {
      return 'In Progress';
    }
    return 'Complaint Committed';
  };

  // Determine the progress bar width based on urgency
  const getProgressBarWidth = (urgency) => {
    switch (urgency) {
      case 'High':
        return '30%';
      case 'Medium':
      case 'Low':
        return '10%';
      default:
        return '0%';
    }
  };

  return (
    <div className="complaints-page">
      <h2 className="title">Complaint Status</h2>
      {formData ? (
        <div className="complaint-details">
          <p><strong>Complaint:</strong> {formData.complaint}</p>
          <p><strong>Category:</strong> {formData.category}</p>
          <p><strong>Subcategory:</strong> {formData.subcategory || 'N/A'}</p>
          <p><strong>Urgency:</strong> {formData.urgency}</p>
          <div className="status-box">
            <p><strong>Status:</strong> {getStatus(formData.urgency)}</p>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: getProgressBarWidth(formData.urgency) }}
              />
            </div>
          </div>
          <p><strong>Submitted on:</strong> {formData.submissionTime}</p>
        </div>
      ) : (
        <p>No complaint data available.</p>
      )}
      <Link to="/" className="home-link">Back to Home</Link>
      
      <div className="bg-black text-white py-4  left-0 w-full text-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Complaint Management</h2>
        <p className="mt-2">Efficient complaint management with tracking and resolution.</p>
        <div className="flex space-x-4 mt-4 justify-center">
          <a href="https://www.instagram.com" className="text-gray-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.facebook.com" className="text-gray-600">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-gray-600">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
        <footer className="mt-8">
          © all rights reserved. Created by MREN team
        </footer>
        </div>
        </div>
  
  
    </div>
  );
}

export default ComplaintsPage;

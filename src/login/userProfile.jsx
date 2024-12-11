import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './login.css';
import './userProfile.css';

export function Authenticated(props) {
  const navigate = useNavigate();
  const [randDate, setRandDate] = useState(""); // Use useState for managing state

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  function getRandomDate(start, end) {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = Math.random() * (endTime - startTime) + startTime;
    return new Date(randomTime);
  }

  function getRandomDates() {
    const startDate = new Date('2024-12-01'); // Start of December 2024
    const endDate = new Date('2025-04-30');   // End of April 2025

    const firstDate = getRandomDate(startDate, endDate);
    setRandDate(firstDate.toDateString()); // Convert date to a readable string
  }

  React.useEffect(() => {
    getRandomDates(); // Generate a random date when the component mounts
  }, []); // Empty dependency array ensures this runs once

  return (
    <div>
      <div className="profile-container">
        <div className="profile-card">
          <img src="pngegg.png" alt="Profile Picture" className="profile-picture" />
          <div className='user-info'>
            <h1 className="user-name">{props.userName}</h1>
            <p className="user-email">Contact Information: (800)-555-1234</p>
            <p className="user-loc">Next Appointment: {randDate}</p>
          </div>
          <div className="profile-actions">
            <button>Edit Profile</button>
          </div>
        </div>

        <div id="submit-buttons">
          <Button variant='primary' onClick={() => navigate('/book')}>
            Book Appointment
          </Button>
          <Button variant='secondary' onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

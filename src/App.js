import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalCandidates, setTotalCandidates] = useState(1);
  const [vehicles, setVehicles] = useState([]);

  const handleSearch = async () => {
    try {
      // Perform an API call to fetch available vehicles using pointA, pointB, startDate, endDate, startTime, endTime, and totalCandidates
      const response = await axios.get(
        `https://api.example.com/vehicles?pointA=${pointA}&pointB=${pointB}&startDate=${startDate}&endDate=${endDate}&startTime=${startTime}&endTime=${endTime}&totalCandidates=${totalCandidates}`
      );
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching available vehicles:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>My Transfer</h1>
        <nav>
          <ul>
            <li>Destination</li>
            <li>My Booking</li>
            <li>Travel Agencies</li>
            <li>Help Centre</li>
            <button>Login</button>
          </ul>
         
        </nav>
      </header>
      <main className="heading">
        <div >
          
          <h1 className="heading">Are you looking for airport transfers?</h1>
              <h2 className="heading">You have come to the right place</h2>
          <div className="options">
            <label>Pickup Location:</label>
            <input type="text" value={pointA} onChange={(e) => setPointA(e.target.value)} />
          </div>
          <div className="options">
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div> 
            <div className="options">
            <label>Start Time:</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="options">
            <label>Dropoff Location:</label>
            <input type="text" value={pointB} onChange={(e) => setPointB(e.target.value)} />
          </div>
          <div className="options">
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className="options">
            <label>End Time:</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
          <div className="options">
            <label >Total Candidates:</label>
            <input
              type="number"
              value={totalCandidates}
              onChange={(e) => setTotalCandidates(e.target.value)}
            />
          </div >
          <button  className="search-button" onClick={handleSearch}>Search</button>
          <div >
            
            <h1>Book your transfer to the Airport or your private ride with ease. Enjoy our service at best rates available.</h1>
            <div className="support">
            <h1>DOOR-TO-DOOR</h1>
            <p>From the Airport to your destination</p>
            <h1>PRIVATE TRANSFER</h1>
            <p>We offer only private tranfer no shared service</p>
          
          <h1>MEET & GREET</h1>
          <p>Our driver will meet & greet you in the arrivals hall</p>
          <h1>24/7 CUSTOMER SUPPORT</h1>
          <p>We are  here to help!Before  during and after your trip</p>
         
          </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};
         

export default App;

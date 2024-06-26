import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text-content">
          <h2>World'S #1 JOB PLATFORM</h2>
          <h1>Your job search ends here</h1>
          <p className="tagline">Discover 50 crore+ career opportunities</p>
          <div className="search-bar">
            <div className="search-input">
              <FaSearch className="icon" />
              <input type="text" placeholder="Search jobs by 'company'" />
            </div>
            <div className="location-input">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Anywhere in  the world" />
            </div>
            <button>Search jobs</button>
          </div>
        </div>
        <div className="image-content">
          <img src="./photoes/JobsforWomen.png" alt="Job Search" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <nav id="sidebar" className="sidebar">
        <div className="profile-picture">
                <img className="profile-picture" id='picture' src="/profile.png" alt="Profile"/>
                <h6 id='logged-in'> Logged in as Fatou.K@HSBC </h6>
        </div>
      {/* Sidebar content goes here */}
      <ul className="nav flex-column">
        <li className="nav-item">
            <h6> <Link id='nav-link'to="/">Home</Link> </h6>
        </li>
        <li className="nav-item">
          <h6> <Link id='nav-link'to="/Mentor_Space">Mentoring Space</Link> </h6>
        </li>
        {/* Add more sidebar links as needed */}
        <li className="nav-item">
          <h6> <Link id='nav-link'to="/Exploration_Centre">Exploration Centre</Link> </h6>
        </li>
        <li className="nav-item">
          <h6> <Link id='nav-link'to="/Reflections">Anonymous Reflections</Link> </h6>
        </li>
        <li className="nav-item">
          <h6> <Link id='nav-link'to="/Profile">Profile</Link> </h6>
        </li>
      </ul>
      <div className="profile-picture">
                <img className="profile-picture" id='picture' src="/logo.png" alt="Profile"/>
        </div>
        
    </nav>

    
  );
}

export default SideBar;

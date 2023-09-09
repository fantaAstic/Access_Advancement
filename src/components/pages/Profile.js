import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import the CSS file
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';


function Profile() {
  return (
  <div className='content'>  

  <div className="card-picture">
    <div className="card-body">
      {/* Card content goes here */}
      <div className="profile-content">
        <div className="profile-picture">
          <img className="profile-picture" id='picture' src="/profile.png" alt="Profile"/>
        </div>
        <div className="profile-text">
            <p>Fatou Kebe &#x1F604;</p>
            <div className="profile-buttons">
            <Link id='nav-link'to="/Reflections"><button className="message-button">
              <i className="fas fa-envelope"></i> Message
              </button>
            </Link> 
              <button className="setting-button">
                <i className="fas fa-cog"></i> Settings
              </button>
            </div>
          <p>Digital Business Services Division &#129513;</p>
          <p>Cybersecurity Analyst &#x1F4BB;</p>
          <p id='profile_status'>Profile: public</p>
        </div>
      </div>
    </div>
  </div>


      <div className="cards-container">
        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id='card-title'>Projects</p>
              <a href='https://github.com/fantaAstic/Access_Advancement_UI'> <button className="search-button">
                <i className="fab fa-github"></i> Check my GitHub
              </button> 
              </a>
          </div>
        </div>

        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id='card-title'> Journal and Achievements</p>        
            <Link id='nav-link'to="/Journal">
              <button className="search-button">
                  <i className="fas fa-book"></i> Open Journal
              </button>
            </Link> 
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id='card-title'>Mentor</p>
            Mentored by Bakari Jackson
            <Link id='nav-link'to="/Mentor_Space">
            <button className="search-button">
                <i className="fas fa-address-book"></i> Open Mentoring Space
            </button>
            </Link> 
          </div>
        </div>

        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id="card-title">Virtual Assistant</p>
            {/* Add the input field */}
            <div className="input-button-container">
              <input
                type="text"
                placeholder="Ask anything career-related"
                className="question-input"
              />
              <button className="search-button">
                <i className="fas fa-search"></i> Search
              </button>
              <button className="voice-button">
                <i className="fas fa-microphone"></i> Voice
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom-right image */}
      <div className="bottom-right-image">
        <img src="/company.png" alt="Bottom-right Image" />
      </div>

    </div>
  );
}

export default Profile;


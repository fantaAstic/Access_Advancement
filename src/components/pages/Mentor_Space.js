import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Mentor_Space() {
  return (
    <div className='content'>
     <div className="card-picture">
            <div className="card-body">
                {/* Card content goes here */}
                <div className="profile-content">
                    <div className="profile-picture">
                        <img className="profile-picture" id='picture' src="/mentor.png" alt="Profile"/>
                    </div>
                    <div className="profile-text">
                      <p>Bakari Jackson &#x1F604;</p>
                      <div className="profile-buttons">
                        <button className="message-button">
                        <i className="fas fa-envelope"></i> Message
                        </button>
                      </div>
                    <p>Digital Business Services Division &#129513;</p>
                    <p>Senior Software Engineer &#x1F4BB;</p>
                    </div>
                    </div>
            </div>
        </div>

        <div className="cards-container">
        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id='card-title'>Primary Goal</p>
            <p> Transition into becoming of Software Engineer</p>
              <a href='https://github.com/fantaAstic/Access_Advancement'> <button className="search-button">
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
            <p id='card-title'>Mentoring Record</p>
            <p> 6 months, every fortnight </p>
            <div>

          <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option1"
              value="Option 1"
            />
            <label htmlFor="option1">13/09/2023</label>

            <input
              type="checkbox"
              id="option2"
              value="Option 2"
            />
            <label htmlFor="option2">27/09/2023</label>

            <input
              type="checkbox"
              id="option3"
              value="Option 3"
            />
            <label htmlFor="option3">11/10/2023</label>
          </div>

          <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option4"
              value="Option 4"
            />
            <label htmlFor="option4">25/10/2023</label>

            <input
              type="checkbox"
              id="option5"
              value="Option 5"
            />
            <label htmlFor="option5">08/11/2023</label>

            <input
              type="checkbox"
              id="option6"
              value="Option 6"
            />
            <label htmlFor="option6">22/11/2023</label>
          </div>

          <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option7"
              value="Option 7"
            />
            <label htmlFor="option7">06/12/2023</label>

            <input
              type="checkbox"
              id="option8"
              value="Option 8"
            />
            <label htmlFor="option8">20/12/2023</label>

            <input
              type="checkbox"
              id="option9"
              value="Option 9"
            />
            <label htmlFor="option9">03/01/2024</label>
          </div>

          <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option10"
              value="Option 10"
            />
            <label htmlFor="option10">17/01/2024</label>

            <input
              type="checkbox"
              id="option11"
              value="Option 11"
            />
            <label htmlFor="option11">31/01/2024</label>

            <input
              type="checkbox"
              id="option12"
              value="Option 12"
            />
            <label htmlFor="option12">14/02/2024</label>
          </div>

          <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option13"
              value="Option 13"
            />
            <label htmlFor="option13">28/02/2024</label>
          </div>

          </div>
          </div>
        </div>

        <div className="card-rounded">
          <div className="card-body">
            {/* Card content goes here */}
            <p id="card-title">Weekly Goals</p>

            <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option14"
              value="Option 15"
            />
            <label htmlFor="option15">Research Front-End Technologies - HTML</label>
            </div>

            <div className='date-checkboxes'>
            <input
              type="checkbox"
              id="option15"
              value="Option 15"
            />
            <label htmlFor="option15">use replit/jsfiddle to experiment with HTML</label>
            </div>

            {/* Add the input field */}
            <div className="input-button-container">
              <input
                type="text"
                placeholder="What is this week's goal?"
                className="question-input"
              />
              <button className="search-button">
                <i className="fas fa-comment"></i> Submit
              </button>
              <button className="voice-button">
                <i className="fas fa-microphone"></i> Voice
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Mentor_Space;

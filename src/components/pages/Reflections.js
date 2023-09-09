import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

function Reflections() {
  return (
    <div className='content'>

        <div className="card-picture">
            <div className="card-body">
                {/* Card content goes here */}
                <div className="profile-content">
                    <div className="profile-text">
                        <p id="person"> User_212 said...</p>
                        <div className="profile-question">
                            <p id='response'> I really like the layout of the app; it's quite simple to navigate. </p>
                        </div>
                        <div className="response-data">
                            <i className="fas fa-commenting"><p>17:58, 02/08/2023</p></i>
                            <i className="fas fa-eye"><span>57 views</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='reply2'>
        <div className="card-picture">
            <div className="card-body">
                {/* Card content goes here */}
                <div className="profile-content">
                    <div className="profile-text">
                        <p id="person"> User_97 said...</p>
                        <div className="profile-question">
                            <p id='response'> Guys...someone from the senior Digital Business Service contacted me from my Access Advancement page after seeing my projects!! </p>
                        </div>
                        <div className="response-data">
                            <i className="fas fa-commenting"><p>09:07, Today</p></i>
                            <i className="fas fa-eye"><span>26 views</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div id='reply3'>
        <div className="card-picture">
            <div className="card-body">
                {/* Card content goes here */}
                <div className="profile-content">
                    <div className="profile-text">
                        <p id="person"> User_305 said...</p>
                        <div className="profile-question">
                            <p id='response'> Some great content on the Exploration Centre - can't wait to see more </p>
                        </div>
                        <div className="response-data">
                            <i className="fas fa-commenting"><p>14:56, 23/08/2023</p></i>
                            <i className="fas fa-eye"><span>64 views</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div id='reply4'>
        <div className="card-picture">
            <div className="card-body">
                {/* Card content goes here */}
                <div className="profile-content">
                    <div className="profile-text">
                        <p id="person"> User_533 said...</p>
                        <div className="profile-question">
                            <p id='response'> We need some more colour themes for our profile pages. </p>
                        </div>
                        <div className="response-data">
                            <i className="fas fa-commenting"><p>12:32, 18/08/2023</p></i>
                            <i className="fas fa-eye"><span>78 views</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
     {/* Input field and buttons */}
     <div className="bottom-container">
            <div className="input-field">
            <input
                type="text"
                placeholder="Share your reflections on your experiences at work and Access Advancement"
                className="form-control"
            />
            </div>
            <div className="input-buttons">
            <button className="btn btn-primary">Share</button>
            </div>
        </div>
    </div>
  );
}

export default Reflections;
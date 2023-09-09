import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

function Exploration_Centre() {
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
                        <p id="person"> Fatou.K asked...</p>
                        <div className="profile-question">
                            <p id='response'> How do I add multiple pages to my react app?</p>
                        </div>
                        <div className="response-data">
                            <i className="fas fa-commenting"><p>18:46, yesterday</p></i>
                            <i className="fas fa-eye"><span>10 views</span></i>
                            <i className="fas fa-envelope"><span>4 replies</span></i>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

        <div id='card-reply'>
            <div className="card-picture">
                <div className="card-body">
                    {/* Card content goes here */}
                    <div className="profile-content">
                        <div className="profile-picture">
                            <img className="profile-picture" id='picture' src="/profile.png" alt="Profile"/>
                        </div>
                        <div className="profile-text">
                            <p> Most Popular Reply</p>
                            <p id="person"> Maisha replied...</p>
                            <div className="profile-question">
                                <p id='response'> Hey, you need to use a module called react-router-dom. Check out this vid</p>
                            </div>
                            <div className="response-data">
                                <i className="fas fa-commenting"><p>20:18, yesterday</p></i>
                                <i className="fas fa-eye"><span>15 views</span></i>
                                <i className="fas fa-envelope"><span>0 replies</span></i>
                            </div>
                        </div>
                    </div>
                    {/* Insert the embedded video here */}
                    <iframe
                        width="460"
                        height="215"
                        src="https://www.youtube.com/embed/o05ZP6_JQqE"
                        title="Embedded Video"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
        

        {/* Input field and buttons */}
        <div className="bottom-container">
            <div className="input-field">
            <input
                type="text"
                placeholder="Share ideas or ask questions"
                className="form-control"
            />
            </div>
            <div className="input-buttons">
            <button className="btn btn-primary">Share</button>
            <button className="btn btn-secondary"><i className="fas fa-files-o"></i> Attach File</button>
            </div>
        </div>

    </div>
  );
}

export default Exploration_Centre;
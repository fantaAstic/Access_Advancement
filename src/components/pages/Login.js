import React from 'react';
import './SignUp.css'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login-container">
      <div className="logo-fixed">
        <img className="logo" src="/complete-logo.png" alt="Logo" />
        {/* Add any other content you want in the sidebar */}
      </div>
      <div className="signup-content">
            <h3>Login Here</h3>
            {/* Add your sign-up form or content here */}
            {/* Log-in Form */}
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter company email"
                  className="form-control"
                />
                </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
              </div>
            <Link id='nav-link'to="/Profile">
                <button className="search-button">
                    Login
                </button>
            </Link> 

                {/* Social Login Options */}
            <div className="social-login">
              <p>Or sign up with:</p>
              <i className="fab fa-google"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-github"></i>
            </div>
            </form>

            <div className="bottom-right-image">
              <img src="/login-logo.png" alt="Bottom-right Image" />
            </div>
      </div>
    </div>
  );
}

export default Login;
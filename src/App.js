import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import Mentor_Space from './components/pages/Mentor_Space';
import Exploration_Centre from './components/pages/Exploration_Centre';
import Reflections from './components/pages/Reflections';
import Journal from './components/pages/Journal';
import Login from './components/pages/Login';
import './components/SideBar.css';
import './components/pages/Profile.css';
import './components/pages/Exploration.css';
import './components/pages/Reflections.css';
import './components/pages/Mentor.css';
import './components/pages/SignUp.css';

function App() {
  return (
    <Router>
      <div>
        {/* Place your sidebar and content inside a parent element */}
        <div>
          <Routes>
            <Route path="/Mentor_Space" element={<>
            <SideBar />
            <Mentor_Space />
            </>} />
            <Route path="/" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Exploration_Centre" element={<>
            <SideBar />
            <Exploration_Centre />
            </>} />
            <Route path="/Reflections" element={<>
            <SideBar />
            <Reflections />
            </>} />
            <Route path="/Journal" element={<>
            <SideBar />
            <Journal />
            </>} />
            <Route path="/Profile" element={<>
            <SideBar />
            <Profile />
          </>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



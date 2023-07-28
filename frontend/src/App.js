//Author: Bhavya Jain
import "./App.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import createFooter from "./components/Footer";
import ContactUs from "./components/ContactUs";
import organiser_Dashboard from "./components/organiser-dashboard"

import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';
import { Route,Routes, useNavigate} from 'react-router-dom';
import LoginForm from "./components/loginpage/LoginForm";
import ForgotUser from "./components/loginpage/ForgotUser";
import ProfilePage from "./components/Profile";
import EventList from "./components/EventList";
import MyBooking from "./components/MyBooking";
import NewEvent from "./components/newevent/CreateEventForm";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  // Function to handle login after successful authentication
  const handleLogin = (token) => {
    const decodedToken = jwt_decode(token);
    setLoggedIn(true);
    setIsAdmin(decodedToken.isAdmin);
    setUserId(decodedToken.id);
    setTimeout(100);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    
      <div className="d-flex flex-column min-vh-100">
        <NavBar loggedIn={loggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
        <Routes>
          <Route
            exact
            path="/login"
            element={<LoginForm onLogin={handleLogin} />}
          />
          <Route
            exact
            path="/Profile"
            element={<ProfilePage loggedIn={loggedIn} isAdmin={isAdmin} userId={userId}/>}
          />
          <Route exact path="/" Component={HomePage} />
          <Route path="/register" Component={Register} />
          <Route path="/Faq" Component={Faq} />
          <Route path="/ContactUs" Component={ContactUs} />
          <Route path="/forgotUserCredentials" Component={ForgotUser} />
          <Route path="/organiser-dashboard" Component={organiser_Dashboard} />
          <Route path="/EventsList" element={<EventList userId={userId}/>}/>
          <Route path="/MyBookings" element={<MyBooking userId={userId}/>}/>
          <Route path="/createEvent" element={<NewEvent userId={userId}/>} />
        </Routes>
        {createFooter()}
      </div>
    
  );
};

export default App;

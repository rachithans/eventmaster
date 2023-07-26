//Author: Bhavya Jain
import "./App.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import createFooter from "./components/Footer";
import ContactUs from "./components/ContactUs";
import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import LoginForm from "./components/loginpage/LoginForm";
import ForgotUser from "./components/loginpage/ForgotUser";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to handle login after successful authentication
  const handleLogin = (token) => {
    const decodedToken = jwt_decode(token);
    setLoggedIn(true);
    setIsAdmin(decodedToken.isAdmin);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setIsAdmin(false);
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
          <Route exact path="/" Component={HomePage} />
          <Route path="/register" Component={Register} />
          <Route path="/Faq" Component={Faq} />
          <Route path="/ContactUs" Component={ContactUs} />
          <Route path="/forgotUserCredentials" Component={ForgotUser} />
        </Routes>
        {createFooter()}
      </div>
    
  );
};

export default App;

// Author: Bhavya Jain
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link, useLocation } from "react-router-dom";

function LoginForm({ onLogin }) {
  const location = useLocation();
  // Check for the password change message in the location state
  const passwordChangedMessage = location.state?.passwordChangedMessage;
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;
    const formData = new FormData(form);
   
    const postingData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch('https://eventmaster.onrender.com/loginInfo/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postingData),
      });

      if (!response.ok) {
        setInvalid((Invalid) => ({ ...Invalid, check: true }));
        return;
      }
      else{
        alert("Login Successful");
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);
      onLogin(token); // Call the onLogin function to handle successful login
      navigate("/");
    } catch (error) {
      console.error('Login error:', error);
    }
    
  };

  const [Invalid, setInvalid] = useState({
    check: false
  });

  return (
    <>
      <div className="container m-auto">
        <div className="my-5 col-md-8  col-lg-6 p-4 rounded border mt-5 mx-auto">
          <h2 className="text-center">Login</h2>
          {passwordChangedMessage && (
            <div className="alert alert-success">{passwordChangedMessage}</div>
          )}
          {Invalid.check && (<div className="alert alert-success">Incorrect ID or Email</div>)}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="emailField">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                isInvalid={Invalid.email}
                required
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Incorrect Email! Please type again.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordField" id="passwordGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                isInvalid={Invalid.password}
                required
                name="password"
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login Now
            </Button>
            <Button variant="danger" as={Link} to="/forgotUserCredentials" className="ms-0 d-block d-sm-inline ms-sm-2 mt-2 mt-sm-0 w-sm-50">
              Forgot Credentials?
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

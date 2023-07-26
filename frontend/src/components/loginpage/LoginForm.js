import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link, useLocation } from "react-router-dom";

function LoginForm({ onLogin }) {
  const location = useLocation();
  // Check for the password change message in the location state
  const passwordChangedMessage = location.state?.passwordChangedMessage;
  // eslint-disable-next-line
  const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[0-9a-zA-Z@#$%^&+=]{4,}$/;
  // eslint-disable-next-line
  const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!passwordChecker.test(formData.password)) {
      setInvalid((Invalid) => ({ ...Invalid, password: true }));
    } else {
      setInvalid((Invalid) => ({ ...Invalid, password: false }));
    }

    if (!emailChecker.test(formData.email)) {
      setInvalid((Invalid) => ({ ...Invalid, email: true }));
    } else {
      setInvalid((Invalid) => ({ ...Invalid, email: false }));
    }

    if (passwordChecker.test(formData.password) && emailChecker.test(formData.email)) {
      const postingData = {
        email: formData.email,
        password: formData.password,
      };

      try {
        const response = await fetch('http://localhost:5050/loginInfo/loginUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postingData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        onLogin(token); // Call the onLogin function to handle successful login
        navigate("/");
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [Invalid, setInvalid] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <>
      <div className="container m-auto">
        <div className="my-5 col-md-8  col-lg-6 p-4 rounded border mt-5 mx-auto">
          <h2 className="text-center">Login</h2>
          {passwordChangedMessage && (
            <div className="alert alert-success">{passwordChangedMessage}</div>
          )}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="emailField">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                isInvalid={Invalid.email}
                required
                name="email"
                type="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleChange}
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
                value={formData.password}
                minLength={8}
                placeholder="Password"
                onChange={handleChange}
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

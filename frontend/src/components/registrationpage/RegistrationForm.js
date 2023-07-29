// Author: Bhavya Jain
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  
  const [Invalid, setInvalid] = useState({
    email: false,
    password: false,
  });

  const [userAlreadyPresent, setuserAlreadyPresent] = useState(false);

    // eslint-disable-next-line
    const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[0-9a-zA-Z@#$%^&+=]{4,}$/;
    // eslint-disable-next-line
    const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const postingData = {
      username: formData.get("formUserName"),
      password: formData.get("formPassword"),
      userType: formData.get("account_type"),
      name: formData.get("formName"),
      email: formData.get("formEmail"),
    };

    if (!passwordChecker.test(postingData.password)) {
      setInvalid((Invalid) => ({ ...Invalid, password: true }));
      return;
    } else {
      setInvalid((Invalid) => ({ ...Invalid, password: false }));
    }
  
    if (!emailChecker.test(postingData.email)) {
      setInvalid((Invalid) => ({ ...Invalid, email: true }));
      return;
    } else {
      setInvalid((Invalid) => ({ ...Invalid, email: false }));
    }
    
    try {
      const response = await fetch('https://eventmaster.onrender.com/loginInfo/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postingData),
      });

      if (!response.ok) {
        if(response.status === 400){
          setuserAlreadyPresent(true);
          navigate("/register");
        }
      }
      else{
        alert("Registration Successful");
        navigate("/");
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
    
  };



  

  return (
    <>
      <div className="container my-5 col-md-6  col-lg-6 p-4 rounded border mt-5">
        <h2 className="text-center">Registration</h2>
        {userAlreadyPresent && (
            <div className="alert alert-success">{"User already exists, please try again"}</div>
          )}
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" name="formName"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control required type="text" placeholder="Enter UserName" name="formUserName"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                isInvalid={Invalid.email}
                required
                name="formEmail"
                type="email"
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Incorrect Email! Please type again.
              </Form.Control.Feedback>
            </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword" id="passwordGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                isInvalid={Invalid.password}
                required
                name="formPassword"
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                Password must contain at least 8 characters,1 special character from '@#$%^&+=',  1 number, 1 upper and 1 lowercase!
              </Form.Control.Feedback>
            </Form.Group>

          <Form.Group className="mb-3" controlId="account_type">
            <Form.Label>User Type</Form.Label>
            <Form.Select required type="text" placeholder="Select User Type" name="account_type">
              <option value="">-- Select User Type --</option>
              <option value="Organizer">Organizer</option>
              <option value="Attendee">Attendee</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Register Now
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegistrationForm;

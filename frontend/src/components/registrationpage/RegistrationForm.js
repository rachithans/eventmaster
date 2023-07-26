import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

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
    console.log(postingData);
    try {
      const response = await fetch('http://localhost:5050/loginInfo/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postingData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      navigate("/");
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>
      <div className="container my-5 col-md-6  col-lg-6 p-4 rounded border mt-5">
        <h2 className="text-center">Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" name="formName"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control required type="text" placeholder="Enter UserName" name="formUserName"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" placeholder="Enter Email" name="formEmail"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" name="formPassword"/>
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

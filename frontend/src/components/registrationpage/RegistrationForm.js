import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="container my-5 col-md-6  col-lg-6 p-4 rounded border mt-5">
        <h2 className="text-center">Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control required type="text" placeholder="Enter UserName" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="account_type">
            <Form.Label>User Type</Form.Label>
            <Form.Select>
              <option value="">-- Select User Type --</option>
              <option value="option1">Organizer</option>
              <option value="option2">Attendee</option>
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

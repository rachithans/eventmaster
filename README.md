<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Project Proposal

**[Group Submission]** This is the submission for group project  of CSCI 4177

- _Date Created_: 18 06 2023
- _Last Modification Date_: 20 06 2023
- _GitLab URL_: https://git.cs.dal.ca/bhavyaj/csci-4177-assignments/-/tree/assignment1
- _Website URL_: https://assignment1csci4177.netlify.app/

## Authors

This is an group deliverables

- 

## Testing

To test the form submission functionality

1. Open the netlify link given above.
2. You will fall on Home page of the website.
3. There you can two other links which are Contact Us and Faqs link.
4. Go to the Contact us page. Here you will be able to send the message to the developer with you name, number and email.
5. Go to the Faqs page. Here you can access different question. For now, dummy text is used to show the content of it.
6. Also you can create or register on the website.

No, backend functions are implemented for this deliverables.

## Deployment

1. Create a react app using ```npx create-reate-app my-app``` in terminal.
2. Make changes or add file to the main folder.
3. Run ```npm run build``` to build the app from which build folder will be published.
4. Open an account on https://www.netlify.com. Upload the build folder to your account using add new site.
5. Click on open production delopy button to check the deployment.

## Built With

* [React.js](https://react.dev/) - Used to create user interface.
* [Netlify](https://www.netlify.com/) - Used for deployment of the project.
* [Bootstrap](https://getbootstrap.com/) - Used for CSS framework.
* [React Bootstrap](https://react-bootstrap.netlify.app/) - Used for CSS framework

## Sources Used

1. https://react-bootstrap.github.io/components -- for all the components
2. https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Ftravel%2Fholi-festival-colors-meaning-180958119%2F&psig=AOvVaw3V2cuqJHYMRJv0HC0Ljb9o&ust=1685432072231000&source=images&cd=vfe&ved=0CBMQjhxqFwoTCMiXzvGBmv8CFQAAAAAdAAAAABAE -- for holi photo
3. https://bootstrap-cheatsheet.themeselection.com --for the bootstrap classes
4. https://www.w3schools.com/react/react_router.asp -- for learning routing
5. https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page -- for learning onClick submit button redirection
6. https://www.w3schools.com/tags/att_form_novalidate.asp -- for learning noValidate attribute
7. https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js -- for regex strings
8. https://github.com/react-bootstrap/react-bootstrap/issues/3465 -- to learn about isValid attribute
9. https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7 -- to learn how to resuable hook to grab updated values from the form submission
10. https://react-bootstrap.netlify.app/docs/forms/validation -- for learning form validation and for bootstrap components.
11. https://react.dev/learn/tutorial-tic-tac-toe -- for learning about spread operator and hooks and useState.
12. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test -- for learning how to test regex
13. https://www.lipsum.com/feed/html -- for lorem ipsum text

### File LoginForm.js

General components are taken from the react-bootstrap website linked above. I will mention specific parts which are used from few websites.

_Lines 10-13 && 50-53 && 59-97_

For line 10-13

```
const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// eslint-disable-next-line
const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

```

For line 50-53

```
const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData)=>({...formData, [name]: value}));
    };
```

For line 57-101

```
<div className='container m-auto'>
    <div className='my-5 col-md-8  col-lg-6 p-4 rounded border mt-5 mx-auto'>
    <h2 className='text-center'>Login</h2>
    <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="emailField">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                isInvalid={Invalid.email}
                required 
                name='email' 
                type="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleChange}
            />
            <Form.Control.Feedback type='invalid'>
                "Incorrect Email! Please type again."
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwordField" id='passwordGroup'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                isInvalid={Invalid.password}
                required 
                name='password' 
                type="password"
                value={formData.password}
                minLength={8}
                placeholder="Password"
                onChange={handleChange}
            />
            <Form.Control.Feedback type='invalid'>
                "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!"
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
            Login Now
        </Button>
        <Button variant="danger" type="reset" className='ms-0 d-block d-sm-inline ms-sm-2 mt-2 mt-sm-0 w-sm-50'>
            Forgot Credentials?
        </Button>
    </Form>
    </div>
</div>
```

The code above was created by adapting the code from line 10-13 [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) as shown below:

```
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

```

The code above was created by adapting the code from line 52-55 [CodeBucks](https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7) as shown below:

```
    const handleChange = (event) => {
        //To stop default events
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,   //spread operator to store old values
            [name]:val,
        })

    }
```

The code above was created by adapting the code from line 59-97 [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) as shown below:

```
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
```

For CodeBucks:

- <!---How---> The code in [CodeBucks](https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7) was implemented by understanding the use of hooks and how to pass data to useState method.
- <!---Why---> [CodeBucks](https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7)'s Code was used because it was required to grab data from the form and update the useState method so that it can be used to check if user has added appropriate value in the password and email field.
- <!---How---> [CodeBucks](https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7)'s Code was modified by changing the whole structure and then dynamically updating the values by using [name].

For Github:

- <!---How---> The code in [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) was implemented by using the regex pattern
- <!---Why---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was used because for testing the password and email against the regex pattern.
- <!---How---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was modified by using it in a different application, but the regex pattern for both email and password was available open source to be used. I used it without changing because it is very general regex pattern that is available. I asked for permission for direct use from TA Mugdha on date: May 30th, 2023.

For react-bootstrap:

- <!---How---> The code in [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by using the components provided by react-bootstrap in my project.
- <!---Why---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was used because I wanted to implement forms using react-bootstrap
- <!---How---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was modified by changing the values to how I wanted it and modifying attributes for validation.

### RegistrationForm.js

_Lines 15 - 51_

```
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

```

The code above was created by adapting the code in [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) as shown below:

```
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;

```

- <!---How---> The code in [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by using the components provided by react-bootstrap in my project.
- <!---Why---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was used because I wanted to implement forms using react-bootstrap
- <!---How---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was modified by changing the values to how I wanted it and modifying attributes for validation.

### App.js

_Lines 13 - 23_

```
<div className="d-flex flex-column min-vh-100">
    {NavBar()}
    <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/Login" Component={LoginPage} />
        <Route path="/Register" Component={Register} />
        <Route path="/Faq" Component={Faq} />
        <Route path="/ContactUs" Component={ContactUs} />
    </Routes>
    {createFooter()}
</div>

```

The code above was created by adapting the code in [W3Schools](https://www.w3schools.com/react/react_router.asp) as shown below:

```
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

- <!---How---> The code in [W3Schools](https://www.w3schools.com/react/react_router.asp) was implemented by understading the usages of react router
- <!---Why---> [W3Schools](https://www.w3schools.com/react/react_router.asp)'s Code was used because I wanted to implement the routing services in my website
- <!---How---> [W3Schools](https://www.w3schools.com/react/react_router.asp)'s Code was modified by implementing in the my context of website and changing things where necessary.

## Acknowledgments

- abhishekh305, his github page helped me learn a lot about how form validation works
- react-bootstrap documentation helped me learn a lot about how to use react.

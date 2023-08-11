<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Assignment 3 - Event Master

- _Date Created_: 28 07 2023
- _Last Modification Date_: 28 07 2023
- _GitLab URL_: https://git.cs.dal.ca/sorathiya/csc-4177-group-20
- _Website URL_: https://eventmastera3.netlify.app

## Authors

- [Bhavya Jain](Bhavya.jain@dal.ca) - _(Full Stack Developer, Database Manager)_

## List of files worked in this assignments:

1. App.js
2. Logininfo.mjs
3. Register.js
4. Profile.js
5. NavBar.js
6. Login.js
7. Homepage.js
8. Footer.js
9. RegistrationForm.js
10. LoginForm.js
11. ForgotUser.js
12. DisplayEventCards.js
13. Description.js

## Features implemented:

I completed both of my features that I took upon in my group, they are:

User Registration: The feature helps the user login/logout to the website and registers to the website under either admin or standard profile. The user would also have an option to forget username/password. The scope of this feature includes everything described above.

Profile Management: The feature helps guide the user to appropriate page and opens different options to different profile options. If a user is attendee, then they would have options to register for an event, leave reviews, cancel registration and so on. If a user is organizer, then they will have options such as create an event, check reviews and so on.

Moreover to highlight things that I developed in the website:

1. Homepage
2. Login page
3. Registration page
4. Forgot Credentials
5. Created the database for the whole team and created my cluster LoginInfo for my features
6. I setup the backend for the whole project and the folder structure, I implemented the env file, which helps ensure that the connection string stays hidden to users.

The features that I worked on in this assignment:

1. User Registration: This registers the user and marks 0 or 1 in the database for attendee and admin respectively. Their password is hashed, so that nobody can see their password. Their is frontend form validation implemented in this feature. There are also proper error handling messages displayed to the user.

2. Login: User is able to login with their ID and Password. Moreover, their login data is stored in a token which is destroyed upon logout. This ensures security of the website.

3. Forgot password: This feature enables the user to reset their password given they know their email address. After successful updation, a prompt will be displayed after redirection to login page.

4. Logout: User is able to click logout on their account and is redirect to homepage.

5. Profile management: User after logging is presented with tabs according to what their profile is, if they are admins then they are displayed items on navbar as compared to when they attendee.

6. Profile page: I have implemented the profile page under this feature, this displays the user details who is logged in.

## Testing

To test the login, logout, register, forgot password, profile management and profile page, do the following:

1. The website loads the homepage
2. Cick on Register button on top
3. It should load the registration page, type in your information for registration and remember your password because there is not way to see the password later then. An appropriate message is shown if you are registered.
4. To check the registration, go to login page now and enter the id and password. You should be logged in and it will alert the user that login is successfull.
5. Then click logout, it should log the user out. You will be redirected to home page. You can see that all the tabs are of homepage.
6. Then click login again to go to login page, then click forgot password. It will redirect to forgot password page, then type in the email address you picked with a new password. After clicking change password it should then redirect the user to login page, where you can then test the changed password.
7. Now to check the profile page, click on profile tab after logged in. It should show you the details for the current logged in user.
8. Moreover, after logging in, you should be able to see profile management working, where if you registered as a user (attendee) you would be able to see different tabs vs you registering as an admin (organizer).

## Deployment

We have deployed the website's backend on render and the frontend on Netlify.

The links for the deployement is provided on top of the readme file.

The backend api call is: https://eventmaster.onrender.com/
The frontend is: https://eventmastera3.netlify.app

## Built With

- [React.js](https://react.dev/) - Used to create user interface.
- [Netlify](https://www.netlify.com/) - Used for deployment of the project.
- [Bootstrap](https://getbootstrap.com/) - Used for CSS framework.
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Used for CSS framework.
- [Express](https://expressjs.com) - Used for backend framework.
- [MongoDB](https://www.mongodb.com) - Used for database.
- [Node JS](https://nodejs.org/en) - Used as JavaScript runtime environment.

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
14. https://unsplash.com/s/photos/events -- for photos
15. https://www.mongodb.com/languages/mern-stack-tutorial - For learning MERN stack and mongo methods
16. https://css-tricks.com/react-authentication-access-control/#:~:text=JWT%20access%20tokens&text=JWTs%20are%20compact%2C%20URL%2Dsafe,for%20authentication%20and%20access%20control.&text=It%27s%20important%20to%20note%20that,JWT%20can%20read%20its%20contents. - For learning how to use access control and tokens
17. https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component - For learning how to use react hooks - useLocation,useNavigate for passing state variables.
18. https://javascript.plainenglish.io/formdata-interface-fe86ec02e01f - For learning about built in interface in JS for managing form data in key value pairs.

Note: Most of the code that is used is taken from Group assignment 1 of my team, which is why I am putting this as a general citation that a huge chunk of code is taken from my Group assignment 1 which is cited in the references below. I have included citations for my work and everyone else will be responsible for adding the citations for their feature implementation. We will collaboratively put in our groups main branch.

### LoginForm.js

General components are taken from the react-bootstrap website linked above. I will mention specific parts which are used from few websites.

_Lines 54-100_

For line 55-100

```
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
```

The code above was created by adapting the code from line 54-107 [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) as shown below:

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

_Lines 78 - 137_

```
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
                Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!
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

### Logininfo.mjs

_Lines 14 - 123_

```
// This section will help you get user details by id.
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const objectId = new ObjectId(id);
    const collection = await db.collection("LoginInfo");
    const user = await collection.findOne({ _id: objectId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Removing sensitive information
    const { password, ...userData } = user;

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// This section will help you create a new record.
router.post("/register", async (req, res) => {

  try{
    // Check if the user already exists
    let collection = await db.collection("LoginInfo");
    let user = await collection.findOne({username: req.body.username});
    if(user) {
      return res.status(400).send("User already exists");
    }

    user = await collection.findOne({email: req.body.email});
    if(user) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    if(req.body.userType === "Organizer"){
      req.body.userType = 1;
    }
    else{
      req.body.userType = 0;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    let newDocument = {
    username: req.body.username,
    password: hashedPassword,
    isAdmin: req.body.userType,
    name: req.body.name,
    email: req.body.email
  };
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  }
  catch (error){
    console.log(error);
    res.send("Internal server error").status(500);
  }

});

// This section will help you login in.
router.post("/loginUser", async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide email and password");
  }
  else{
    try{
      const user = await db.collection("LoginInfo").findOne({email});
      if(!user) {
        return res.status(400).send("Invalid email");
      }
      if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1d"});
        return res.status(200).json({token});
      }
    }
    catch(error){
      console.log(error);
      res.send("Internal server error").status(500);
    }
  }
});

// This section will help you update your password
router.post("/forgotPassword", async (req, res) => {
  try{
    // Check if the user already exists
    let collection = await db.collection("LoginInfo");
    const user = await collection.findOne({email: req.body.email});
    if(!user) {
      return res.status(400).send("User not found");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    // Update the user's password
    let result = await collection.updateOne({email: req.body.email}, {$set: {password: hashedPassword}});
    res.send(result).status(204);
  }
  catch (error){
    console.log(error);
    res.send("Internal server error").status(500);
  }

});
```

The code above was created by adapting the code in [mongodb.com](https://www.mongodb.com/languages/mern-stack-tutorial) as shown below:

```
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = await db.collection("records");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = await db.collection("records");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
```

- <!---How---> The code in [mongodb.com](https://www.mongodb.com/languages/mern-stack-tutorial) was implemented by using the knowledge about how to make a custom API using mongo db.
- <!---Why---> [mongodb.com](https://www.mongodb.com/languages/mern-stack-tutorial)'s Code was used because I wanted to implement the API functionality for loggin in.
- <!---How---> [mongodb.com](https://www.mongodb.com/languages/mern-stack-tutorial)'s Code was modified by changing the whole code structure and using my logic to implement the login functionality.

## Acknowledgments

- abhishekh305, his github page helped me learn a lot about how form validation works
- react-bootstrap documentation helped me learn a lot about how to use react.
- [Esther Itolima](https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m)'s post used to learn about how to redirect from one page to another and also how to pass the data.
- [OriginalGriff](https://www.codeproject.com/Questions/1064433/Regex-which-will-accept-alphanumeric-with-special)'s post was used to to create regex for password that can also accept alpha numberics values and special characters.
- [W3Schools](https://www.w3schools.com/tags/att_input_minlength.asp#:~:text=The%20minlength%20attribute%20specifies%20the,tel%2C%20email%2C%20and%20password.)'s tutorial was used to learned about how to apply lenght requirement in input field.
- [tanguy_k](https://stackoverflow.com/questions/41936524/validation-of-form-input-fields-in-react)'s post was used to learn about to implement html validation.
- [mongodb.com](https://www.mongodb.com/languages/mern-stack-tutorial) for teaching me how to use MERN stack

## References

- S. Sorathiya, “CSCI 4177 INDIVIDUAL ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
- S. Sorathiya, “CSCI 4177 TUTORIAL 3.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
- S. Sorathiya, R. Hans, B. Jain, A. Awasthi, M. Eltazy, Group 20“CSCI 4177 GROUP ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
- B. Jain, “CSCI 4177 INDIVIDUAL ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
- B. Jain, “CSCI 4177 INDIVIDUAL ASSIGNMENT 2.” Summer Term, Dalhousie University, [online document], 2023. [Accessed Jul 24, 2023]
- S. Sorathiya, R. Hans, B. Jain, A. Awasthi, M. Eltazy, Group 20“CSCI 4177 GROUP ASSIGNMENT 1.” Summer Term, Dalhousie University, [Code repository], 2023. [Accessed Jul 23, 2023]

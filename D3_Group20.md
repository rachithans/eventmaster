<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Project - Event Master

- _Date Created_: 11 08 2023
- _Last Modification Date_: 11 08 2023
- _GitLab URL_: https://git.cs.dal.ca/sorathiya/csc-4177-group-20
- _Website URL_: https://eventmasterweb.netlify.app/

## Authors

- [Ayush Awasthi](Ayush.Awasthi@dal.ca) - _(Full Stack Developer, Scrum Master)_
- [Bhavya Jain](Bhavya.jain@dal.ca) - _(Full Stack Developer, Database Manager)_
- [Mohamed Eltazy](M.eltazy@dal.ca) - _(Full Stack Developer, Documents Manager)_
- [Rachit Hans](rachit.hans@dal.ca) - _(Full Stack Developer, Testing)_
- [Sahil Sorathiya](sahil.sorathiya@dal.ca) - _(Full Stack Developer, Designer and Integrator)_

## Testing

_Basic_

1. Open the netlify link given above.
2. You will fall on Home page of the website.
3. There you can two other links which are Contact Us and Faqs link.
4. Go to the Contact us page. Here you will be able to send the message to the developer with you name, number and email.
5. Go to the Faqs page. Here you can access different question. For now, dummy text is used to show the content of it.

<!-- Below is the testing for individual features -->

_Login/Logout/Register and Profile Management_

1. Load the website using the given link on netlify
2. Cick on Register button on top
3. It should load the registration page, type in your information for registration and remember your password because there is not way to see the password later then. An appropriate message is shown if you are registered.
4. To check the registration, go to login page now and enter the id and password. You should be logged in and it will alert the user that login is successfull.
5. Then click logout, it should log the user out. You will be redirected to home page. You can see that all the tabs are of homepage.
6. Then click login again to go to login page, then click forgot password. It will redirect to forgot password page, then type in the email address you picked with a new password. After clicking change password it should then redirect the user to login page, where you can then test the changed password.
7. Now to check the profile page, click on profile tab after logged in. It should show you the details for the current logged in user.
8. Moreover, after logging in, you should be able to see profile management working, where if you registered as a user (attendee) you would be able to see different tabs vs you registering as an admin (organizer).

_Booking system_

For login use: email => sahils@gmail.com Password => Dal@6699
Or create new acount as attendee

Test 1: Open the website -> go to "Event List" -> try booking with 0 registration -> it will show error message.

Test 2: Open the website -> go to "Event list" -> increment the number of reservation-> click on "Book Now" button -> it will show booking successful message with the total price. And event will beadded to my booking list.

Test 3: Open the website -> go to" My Bookings" -> increment or decrement the number of registration -> click on "Modify Booking" button -> it will show modification successful message with the new total price.

Test 4: Open the website -> go to" My Bookings" -> make number of registration equals 0 -> click on "Modify Booking" button -> it will show error message.

Test 5: Open the website -> go to" My Bookings" -> select event with more than 0 registrations -> click on "Cancel Booking" -> it will show cancellation successful messagewith total refund amount.It will also revmove event from my bookings list.

Test 6:All the tasks are also updating the database collections. When user booked thetickets, number of tickets booked, total revenue generated are updatedito events colection. Also booked tickets for attendeeisalso updatedin attendee collection.

_Event Builder_

1. Visit the Event Master website.
2. Click on login and complete the login form using your credentials used at signup.
3. Click on "Create Event" from the navbar
4. Complete the "New Event" form.
5. Click on "Create Event" button
6. Green pop up will show and you will be redirected to home page if successful. Otherwise proper error message will show.

_Discussion_

1. Load the url using the given link
2. Login to the EventMaster application
3. On the navigation bar hit the discussions button
4. You would be able to view the comments posted by the user.
5. To add your comment enter the comment in the form and click submit.
6. You would be able to view your comment at the bottom of the discussions.

## Deployment

Front-End

1. Create a react app using `npx create-reate-app my-app` in terminal.
2. Make changes or add file to the main folder.
3. Run `npm run build` to build the app from which build folder will be published.
4. Open an account on https://www.netlify.com. Upload the build folder to your account using add new site.
5. Click on open production delopy button to check the deployment.

Back-End

1. Uploded server to Github
2. Server is hosted on render by linking the github with the Render account.

## Built With

- [React.js](https://react.dev/) - Used to create user interface.
- [Netlify](https://www.netlify.com/) - Used for deployment of the project.
- [Bootstrap](https://getbootstrap.com/) - Used for CSS framework.
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Used for CSS framework
- [MERN Stack](https://www.mongodb.com/languages/mern-stack-tutorial) - Used access the database
- [MongoDB](https://www.mongodb.com/) - Used for data storage
- [Render](https://render.com/) - Used to host server for API

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
15. https://chat.openai.com/ -- used to fill the data into collections(MongoDB), took help in coding when error occurs, also for leraning MERN stack in an efficient way, genrated faq question and answers using this.
16. https://getbootstrap.com/docs/5.3/components/modal/ -- used to create modal that is used to notify the user about the actions.
17. https://www.mongodb.com/languages/mern-stack-tutorial-- Used to setup environment for mern and coding style. Also used for basic code that needto create APIs.
18. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date -- for accessing the date
19. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart -- for padding the time
20. https://render.com/ -- for server hosting
21. https://www.mongodb.com/languages/mern-stack-tutorial - For learning MERN stack and mongo methods
22. https://css-tricks.com/react-authentication-access-control/#:~:text=JWT%20access%20tokens&text=JWTs%20are%20compact%2C%20URL%2Dsafe,for%20authentication%20and%20access%20control.&text=It%27s%20important%20to%20note%20that,JWT%20can%20read%20its%20contents. - For learning how to use access control and tokens
23. https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component - For learning how to use react hooks - useLocation,useNavigate for passing state variables.
24. https://javascript.plainenglish.io/formdata-interface-fe86ec02e01f - For learning about built in interface in JS for managing form data in key value pairs.

### LoginForm.js

General components are taken from the react-bootstrap website linked above. I will mention specific parts which are used from few websites.

_Lines 54-100_

For line 60-103

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

For react-bootstrap:

- <!---How---> The code in [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by using the components provided by react-bootstrap in my project.
- <!---Why---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was used because I wanted to implement forms using react-bootstrap
- <!---How---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was modified by changing the values to how I wanted it and modifying attributes for validation.

### RegistrationForm.js

_Lines 78 - 138_

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

#### For react-boostrap:

- <!---How---> The code in [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by using the components provided by react-bootstrap in my project.
- <!---Why---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was used because I wanted to implement forms using react-bootstrap
- <!---How---> [react-bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s Code was modified by changing the values to how I wanted it and modifying attributes for validation.

_Lines 18 - 21_

```
// eslint-disable-next-line
    const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[0-9a-zA-Z@#$%^&+=]{4,}$/;
    // eslint-disable-next-line
    const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

These lines were modified from the code provided in the [github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) as shown below:

```
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
```

#### For Github:

- <!---How---> The code in [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) was implemented by using the regex pattern
- <!---Why---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was used because for testing the password and email against the regex pattern.
- <!---How---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was modified by using it in a different application, but the regex pattern for both email and password was available open source to be used. I used it without changing because it is very general regex pattern that is available. I asked for permission for direct use from TA Mugdha on date: May 30th, 2023.

### ForgotUser.js

_Lines 9 - 12_

```
// eslint-disable-next-line
    const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[0-9a-zA-Z@#$%^&+=]{4,}$/;
    // eslint-disable-next-line
    const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

These lines were modified from the code provided in the [github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) as shown below:

```
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
```

- <!---How---> The code in [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js) was implemented by using the regex pattern
- <!---Why---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was used because for testing the password and email against the regex pattern.
- <!---How---> [Github](https://github.com/abhishek305/simple-react-signup-form-with-validation/blob/main/src/Components/form-component.js)'s Code was modified by using it in a different application, but the regex pattern for both email and password was available open source to be used. I used it without changing because it is very general regex pattern that is available. I asked for permission for direct use from TA Mugdha on date: May 30th, 2023.

### Logininfo.mjs

_Lines 14 - 130_

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

### ContactUs.js

_Lines 22 - 106_

```
<div className="container col-lg-6 col-sm-9 bg-light p-4 rounded border mt-5">
    <h2 className="mt-2 mb-4 text-center text-dark">Get in Touch Today</h2>
    <form>
    <div className="row my-3">
        <div className="col-md-6 col mb-3 mb-md-0 ">
        <label htmlFor="fname" className=" text-dark">
            First Name <span className="text-danger">*</span>
        </label>
        <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="First name"
            pattern="[A-Za-z]+"
            title="Enter only letters"
            required
        />
        </div>
        <div className="col-md-6">
        <label htmlFor="fname" className=" text-dark">
            Last Name <span className="text-danger">*</span>
        </label>
        <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Last name"
            pattern="[A-Za-z]+"
            title="Enter only letters"
            required
        />
        </div>
    </div>
    <div className="form-row my-3">
        <div className="col">
        <label htmlFor="email" className=" text-dark">
            Email <span className="text-danger">*</span>
        </label>
        <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            required
        />
        </div>
    </div>
    <div className="form-row my-3">
        <div className="col">
        <label htmlFor="phone_number" className=" text-dark">
            Phone Number <span className="text-danger">*</span>
        </label>
        <input
            type="tel"
            className="form-control"
            id="phone_number"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
        />
        </div>
    </div>
    <div className="form-row my-3">
        <div className="col">
        <label htmlFor="message" className=" text-dark">
            Message
        </label>
        <textarea
            type="text"
            className="form-control"
            id="message"
            placeholder="Message"
            pattern=".+"
            title="Enter a message"
            required
        />
        </div>
    </div>
    <div className="d-flex justify-content-center">
        <button className="btn btn-primary">Send Message</button>
    </div>
    </form>
</div>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/) as shown below:

```
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/) was implemented by Bootstrap Team.
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/)'s Code was used to display the form for registration.
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/)'s Code was modified by [Sahil Sorathiya](sahil.sorathiya@dal.ca).Few new input fields are added to it.

### Event.js

_Lines 34 - 41_

```
  const countDecrease = (eventId) => {
    if (count[eventId] > 0) {
      setCount((prevCount) => ({
        ...prevCount,
        [eventId]: prevCount[eventId] - 1,
      }));
    }
  };

  const countIncrease = (eventId) => {
    setCount((initialCount) => ({
      ...initialCount,
      [eventId]: initialCount[eventId] + 1,
    }));
  };

```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/47647269/how-to-get-spread-operator-updating-state-with-react) as shown below:

```
this.setState(prevState => ({
  ...prevState,
  metawords: evt.target.value,
}))

```

_Lines 52 - 84_

```
 const handleBooking = async (eventId, qty, price) => {
    if (qty > 0) {
      const data = {
        userId: userId,
        eventId: eventId,
        qty: qty,
      };

      try {
        const response = await fetch(
          "http://localhost:5050/events/eventbooking",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        setModalTitle("Booking Successful!!");
        setModalBody([
          "Your ticket are booked. Enjoy your  event.",
          `Total Price ($${price * qty}) = Qty(${qty}) X Price($${price})`,
        ]);
      } catch (error) {
        setModalTitle("Booking Failed!!");
        setModalBody(["Please try again.", ``]);
      }
    } else {
      setModalTitle("Please Enter Number of Tickets");
      setModalBody(["Use '+' button to enter number of tickets.", ``]);
    }
  };

```

The code above was created by adapting the code in [MongoDB](https://www.mongodb.com/languages/mern-stack-tutorial) as shown below:

```
 async function onSubmit(e) {
   e.preventDefault();

   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };

   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 }

```

_Lines 141 - 158_

```
<div className=" text-center mx-auto my-4">
<button onClick={countDecrease} style={setCountBtn}>
    -
</button>
<input
    value={count}
    readOnly
    style={inputCount}
    id={props.eventId}
></input>
<button onClick={countIncrease} style={setCountBtn}>
    +
</button>
</div>

```

The code above was created by adapting the code in [CodePen](https://codepen.io/rkoms/pen/OJbrGKX) as shown below:

```
<div class="number">
	<span class="minus">-</span>
	<input type="text" value="1"/>
	<span class="plus">+</span>
</div>

```

_Lines 177 - 208_

```
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
            {modalTitle}
        </h1>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
        </div>
        <div className="modal-body">
        <p>{modalBody[0]}</p>
        <p>{modalBody[1]}</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="bg-primary" data-bs-dismiss="modal" onClick={getRecords}>
            Close
        </button>
        </div>
    </div>
    </div>
</div>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/modal/) as shown below:

```
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

```

### MyBooking.js

_Lines 37 - 51_

```
const countDecrease = (eventId) => {
if (count[eventId] > 0) {
    setCount((prevCount) => ({
    ...prevCount,
    [eventId]: prevCount[eventId] - 1,
    }));
}
};

const countIncrease = (eventId) => {
setCount((initialCount) => ({
    ...initialCount,
    [eventId]: initialCount[eventId] + 1,
}));
};

```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/47647269/how-to-get-spread-operator-updating-state-with-react) as shown below:

```
this.setState(prevState => ({
  ...prevState,
  metawords: evt.target.value,
}))

```

_Lines 53 - 126_

```
const handleCancellation = async (eventId, price) => {
const data = {
    userId: userId,
    eventId: eventId,
};

try {
    const response = await fetch(
    "http://localhost:5050/bookings/eventcancellation",
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    );

    setModalTitle("Cancellation Successful!!");
    setModalBody([
    "Your tickets are cancelled. Have a nice day.",
    `Return amount ($${price * checkCount[eventId]}) = Qty(${
        checkCount[eventId]
    }) X Price($${price})`,
    ]);
} catch (error) {
    setModalTitle("Cancellation Failed!!");
    setModalBody(["Please try again.", ``]);
}
};

const handleModification = async (eventId, qty, price) => {
if (count[eventId] === checkCount[eventId]) {
    setModalTitle("Please Modify Tickets");
    setModalBody([
    "Please user '-' to decrease the number of tickets or '+' to increase the number of tickets.",
    ]);
} else if (qty > 0) {
    const data = {
    userId: userId,
    eventId: eventId,
    qty: qty,
    };

    try {
    const response = await fetch(
        "http://localhost:5050/bookings/eventmodification",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }
    );
    setModalTitle("Modification Successful!!");
    setModalBody([
        "Your ticket are modified. Enjoy your  event.",
        `New Total Price ($${price * qty}) = Qty(${qty}) X Price($${price})`,
    ]);
    setTimeout(200);
    getRecords();
    } catch (error) {
    setModalTitle("Modify Failed!!");
    setModalBody(["Please try again.", ``]);
    }
} else {
    setModalTitle("Please Enter Number of Tickets");
    setModalBody([
    "To modify the tickets, you should have atleast 1 ticket.",
    ``,
    ]);
}
};

```

The code above was created by adapting the code in [MongoDB](https://www.mongodb.com/languages/mern-stack-tutorial) as shown below:

```
 async function onSubmit(e) {
   e.preventDefault();

   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };

   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 }

```

_Lines 263 - 293, 218 - 248_

```
<div
    className="modal fade"
    id="cancelButton"
    tabindex="-1"
    aria-labelledby="cancelButtonLabel"
    aria-hidden="true"
>
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="cancelButtonLabel">
            {modalTitle}
        </h1>
        </div>
        <div className="modal-body">
        <p>{modalBody[0]}</p>
        <p>{modalBody[1]}</p>
        </div>
        <div className="modal-footer">
        <button
            type="button"
            className="bg-primary"
            data-bs-dismiss="modal"
            onClick={getRecords}
        >
            Close
        </button>
        </div>
    </div>
    </div>
</div>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.3/components/modal/) as shown below:

```
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### newEventInfo.mjs

The overall structure and layout of this file was adopted and developed off of the file mern/server/routes/record.mjs from the MongoDB MERN stack tutorial. (https://www.mongodb.com/languages/mern-stack-tutorial) 

_Lines 70-82 have been developed with the aid of line 17-30 from server/routes/Events.mjs created by Rachit Hans
```
const collectionOrg = await db.collection("Organizers");
        const objUserId = new ObjectId(req.body.organizerID);
        const orgUser = await collectionOrg.findOne({ userID: objUserId });

        if(orgUser === null){
            const allOrgs = await collectionOrg.find().toArray();
            const createOrg = {
                    organizerID: allOrgs[allOrgs.length - 1].organizerID+1,
                    userID: objUserId,
                    eventIDs:[newEventID]
            } 
            await collectionOrg.insertOne(createOrg);
            orgUser = await collectionOrg.findOne({ userID: objUserId });

        }
```


### CreateEventForm.js

The overall structure and layout of this file was adopted and developed off of the file mern/client/src/components/create.js  from the MongoDB MERN stack tutorial. (https://www.mongodb.com/languages/mern-stack-tutorial)  

Line 6-24 was adopted and developed directly using the above link as a walkthrough guide

```
export default function NewEvent({ userId }) {
 const [form, setForm] = useState({
   eventName: "",
   description: "",
   date: new Date(),
   location: "",
   capacity: "",
   price: "",
   organizerID: userId
 });
 const navigate = useNavigate();
 const [errorMessage, setErrorMessage] = useState('');
 const [successMessage, setSuccessMessage] = useState('');
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
}
```

## Acknowledgments

- abhishekh305, his github page helped us learn a lot about how form validation works
- react-bootstrap documentation helped us learn a lot about how to use react.
- [Esther Itolima](https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m)'s post used to learn about how to redirect from one page to another and also how to pass the data.
- [OriginalGriff](https://www.codeproject.com/Questions/1064433/Regex-which-will-accept-alphanumeric-with-special)'s post was used to to create regex for password that can also accept alpha numberics values and special characters.
- [W3Schools](https://www.w3schools.com/tags/att_input_minlength.asp#:~:text=The%20minlength%20attribute%20specifies%20the,tel%2C%20email%2C%20and%20password.)'s tutorial was used to learned about how to apply lenght requirement in input field.
- [tanguy_k](https://stackoverflow.com/questions/41936524/validation-of-form-input-fields-in-react)'s post was used to learn about to implement html validation.
- [CodeWithHarry](https://www.youtube.com/watch?v=RGKi6LSPDLU&t=1s&ab_channel=CodeWithHarry)'s youtube tutorial video was used to gain basic understanding of react.
- [CodePen](https://codepen.io/rkoms)'s code was you to take an idea about counter.
- [Coolors](https://coolors.co/0a2239-2176ff-48a9a6-e74c3c-27ae60-2b303a-737373-f6f7fa) was used to create colour pallet.
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) was used to see different class of bootstrap framework.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [React](https://legacy.reactjs.org/docs/hooks-effect.html) was used to learn about use Effect.
- [Render](https://render.com/) was used to host the server.
- [MongoDB](https://www.mongodb.com/languages/mern-stack-tutorial) was used to learn about MERN stack.
- [Netlify](https://www.netlify.com/) - Used for deployment of the project.

## References

1. S. Sorathiya, “CSCI 4177 INDIVIDUAL ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document, code], 2023. [Accessed June 18, 2023]
2. S. Sorathiya, “CSCI 4177 TUTORIAL 3.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
3. S. Sorathiya, R. Hans, B. Jain, A. Awasthi, M. Eltazy, Group 20“CSCI 4177 GROUP ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
4. B. Jain, “CSCI 4177 INDIVIDUAL ASSIGNMENT 1.” Summer Term, Dalhousie University, [online document], 2023. [Accessed June 18, 2023]
5. S. Sorathiya, R. Hans, B. Jain, A. Awasthi, M. Eltazy, Group 20“CSCI 4177 Project Proposal” Summer Term, Dalhousie University, [online document, code], 2023. [Accessed July 26, 2023]
6. S. Sorathiya, “CSCI 4177 INDIVIDUAL ASSIGNMENT 3.” Summer Term, Dalhousie University, [online document], 2023. [Accessed July 20, 2023]
7. B. Jain, “CSCI 4177 INDIVIDUAL ASSIGNMENT 2.” Summer Term, Dalhousie University, [online document], 2023. [Accessed Jul 24, 2023]
8. B. Jain, “CSCI 4177 INDIVIDUAL ASSIGNMENT 3.” Summer Term, Dalhousie University, [online document], 2023. [Accessed Aug 8, 2023]
9. M. Eltazy, “CSCI 4177 INDIVIDUAL ASSIGNMENT 2.” Summer Term, Dalhousie University, [online document], 2023. [Accessed Jul 20, 2023]
10. B. Eltazy, “CSCI 4177 INDIVIDUAL ASSIGNMENT 3.” Summer Term, Dalhousie University, [online document], 2023. [Accessed Aug 9, 2023]

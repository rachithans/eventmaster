import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
const ContactUs = () => {
    const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//   const history = useHistory();

  const handleFname = (e) => {
    setFName(e.target.value);
  };

  const handleLname = (e) => {
    setLName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Should match with password.");
//     }
//     else{
//       history.push({ pathname: "/profile", state: { fName, lName, email } });
//     }

    
//   };
  return (
    <div className="container col-lg-6 col-sm-9 bg-light p-4 rounded border mt-5">
      <h2 className="mt-2 mb-4 text-center text-dark">Get in Touch Today</h2>
      <form>
      {/* onSubmit={handleSubmit} */}
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
              onChange={handleFname}
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
              onChange={handleLname}
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
              onChange={handleEmail}
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
            //   onChange={handlePhoneNumber}
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
            //   onChange={handlePhoneNumber}
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs

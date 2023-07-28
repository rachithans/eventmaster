import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Button, Alert, Card } from 'react-bootstrap';

 
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
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const eventInfo = { ...form};
   if (
        eventInfo.eventName.trim() === '' ||
        eventInfo.description.trim() === '' ||
        eventInfo.date === '' ||
        eventInfo.location.trim() === '' ||
        eventInfo.capacity.trim() === '' ||
        eventInfo.price.trim() === ''
    ) {
        setErrorMessage('All fields are required!');
        setSuccessMessage('');
    } else if (parseFloat(eventInfo.capacity) < 0) {
        setErrorMessage('Event capacity cannot be negative!');
        setSuccessMessage('');
    } else if (parseFloat(eventInfo.price) < 0) {
        setErrorMessage('Ticket price cannot be negative!');
        setSuccessMessage('');
    } else if (new Date(eventInfo.date) < new Date()) {
        setErrorMessage('Event date must be in the future!');
        setSuccessMessage('');
    } else {
        setErrorMessage('');
        setSuccessMessage('Event created successfully!');
         // Perform your form submission logic here

         await fetch("https://eventmaster.onrender.com/newEventInfo/create", {
            method: "POST",
             headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventInfo),
        })
        .catch(error => {
             window.alert(error);
            return;
        });
 
   setForm({eventName: "",
            description: "",
            date: "",
            location: "",
            capacity: "",
            price: ""
        });
   navigate("/");
 }
    }
 
 // This following section will display the form that takes the input from the user.
 return (
    <div className="d-flex flex-column min-vh-100 bg-light">
    <div className="container flex-grow-1 d-flex align-items-center">
        <div className="w-100">
            {errorMessage && (
                <Alert
                    variant="danger"
                    className="mt-3"
                    onClose={() => setErrorMessage('')}
                    dismissible
                >
                    {errorMessage}
                </Alert>
            )}
            {successMessage && (
                <Alert
                    variant="success"
                    className="mt-3"
                    onClose={() => setSuccessMessage('')}
                    dismissible
                >
                    {successMessage}
                </Alert>
            )}
            <Card className="mx-auto mb-lg-5 mt-lg-5 bg-light" style={{ maxWidth: '60vw' }}>

                <h1 className="text-center">New Event</h1>
                <Form onSubmit={onSubmit}>
                    <Card.Body className="bg-dark text-white">
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="eventName" className="float-start h6 fw-bold">Event Title:</Form.Label>
                            <Form.Control
                                type="text"
                                value={Form.eventName}
                                onChange={(e) => updateForm({eventName: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="description" className="float-start h6 fw-bold">Event Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={Form.description}
                                onChange={(e) => updateForm({description: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="date" className="float-start h6 fw-bold">Event Date:</Form.Label>
                            <Form.Control
                                type="datetime-local" // Use the datetime-local input type for both date and time
                                value={form.date.toISOString().slice(0, 19)}
                                onChange={(e) => updateForm({ date: new Date(e.target.value) })}  // Convert the string back to a Date object
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3">
                            <Form.Label htmlFor="location" className="float-start h6 fw-bold">Event Location:</Form.Label>
                            <Form.Control
                                type="text"
                                value={Form.location}
                                onChange={(e) => updateForm({location: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="capacity" className="float-start h6 fw-bold">Event Capacity:</Form.Label>
                            <Form.Control
                                type="number"
                                step="10.00"
                                value={Form.capacity}
                                onChange={(e) => updateForm({capacity: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="price" className="float-start h6 fw-bold">Ticket Price:</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                value={Form.price}
                                onChange={(e) => updateForm({price: e.target.value})}
                            />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-center">
                        <Button variant="outline-light" className="mb-3 mt-3" type="submit" >
                            Create Event
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    </div>
</div>
 );
}

import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
import ProfileNavBar from "./profile/NavbarProfile";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
    

function Profile(){

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      axios.get('https://express-t4.onrender.com/api/users')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <ProfileNavBar></ProfileNavBar>
            <Container className="Profile">
            {data.map((item) => (
                        <Card  className="mt-4" text="light" bg="dark" key={item._id}>
                            <Card.Body >
                                <Card.Title><h3>{item.name} <img src={item.picture} alt={item.picture}></img></h3></Card.Title>
                                <Card.Text className="pt-3 fs-5">
                                    {item.email} 
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{navigate(`/FullProfile/${item._id}`)}}>
                                    View Full Profile
                                </Button>
                            </Card.Body>
                        </Card>
            ))}
            </Container>
        </>
    );
}

export default Profile;
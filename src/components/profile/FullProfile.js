import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import ProfileNavBar from "./NavbarProfile";
import { Card } from "react-bootstrap";
import axios from "axios";

function FullProfile(){
    
    let { userID } = useParams();

    const[data, setData] = useState({});

    // eslint-disable-next-line
    const getParticularData=async()=>{
        let temp = {}
        await axios.get(`https://express-t4.onrender.com/api/users/${userID}`)
        .then ( (response) => {
        
        temp=response.data
        });
        setData (temp)
      }
    
    useEffect(() => {
        getParticularData();
      }, [getParticularData]);
   
    return(
        <>
        <ProfileNavBar></ProfileNavBar>
        <Container className="Profile">

       
        <Card  className="mt-4" text="light" bg="dark" key={data._id}>
            <Card.Body >
                <Card.Title><h3>{data.name} <img src={data.picture} alt={data.picture}></img></h3></Card.Title>
                <Card.Text className="pt-3 fs-5">
                    <p>Email: {data.email}</p>
                    <p>Company: {data.company}</p> 
                    <p>Phone: {data.phone}</p> 
                    <p>Age: {data.email}</p> 
                    <p>Address: {data.address}</p> 
                    <p>About:</p> 
                    <p>{data.about}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Container>
    </>
    );
}

export default FullProfile;
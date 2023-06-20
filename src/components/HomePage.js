import React from "react";
import DisplayEvents from "./homepage/DisplayEventCards";
import Description from "./homepage/Description";
import { Container } from "react-bootstrap";


function HomePage(){
    return(
        <>

            
            {/* Anything inside the container would be centered */}
            <Container>
                {/* This is the description of the website */}
                {Description()}

                {/* Here are the slide components */}
                {DisplayEvents()}
            </Container>

        </>
    );
}

export default HomePage;
// Author: Bhavya Jain
import React from "react";
import DisplayEvents from "./homepage/DisplayEventCards";
import Description from "./homepage/Description";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Container>
        {Description()}
        {DisplayEvents()}
      </Container>
    </>
  );
}

export default HomePage;

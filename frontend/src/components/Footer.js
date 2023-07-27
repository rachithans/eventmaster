// Author: Bhavya Jain
import Container from "react-bootstrap/Container";
import React from "react";

function createFooter() {
  return (
    <footer className="mt-auto py-3 bg-dark text-light">
      <Container className="">
        <h4>&copy; EventMaster 2023</h4>
      </Container>
    </footer>
  );
}

export default createFooter;

// Author: Bhavya Jain
import React from "react";
import { Card } from "react-bootstrap";

function Description() {
  return (
    <>
      <Card className="mt-4" text="light" bg="dark">
        <Card.Body>
          <Card.Title>
            <h3>Welcome to EventMaster</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-warning">
            The new way to book events
          </Card.Subtitle>
          {/* Text taken from lorem ipsum */}
          <Card.Text className="pt-3 fs-5">
            Welcome to EventMaster, the new way to book events. EventMaster is a comprehensive online platform that simplifies event planning, enhances the event experience, fosters social connections, and increases user engagement.
            <br />
            <br />
            Sign up to get started!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Description;

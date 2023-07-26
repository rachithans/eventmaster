// Author: Bhavya Jain
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Holi from "./../../assets/Holi.jpg";
import BeachParty from "./../../assets/BeachParty.jpg";
import Conference from "./../../assets/Conference.jpg";
import Diwali from "./../../assets/Diwali.jpg";
import Soccer from "./../../assets/Soccer.jpg";
import RetroNight from "./../../assets/RetroNight.jpg";
import { Container } from "react-bootstrap";

function DisplayEvents() {
  return (
    <>
      <Container>
        <Row xs={1} md={3} className="mt-4">
          <Col className="mb-4 colEvent ">
            <Card>
              <Card.Img variant="top" src={Holi} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Festival of Colors</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-4 colEvent">
            <Card>
              <Card.Img variant="top" src={BeachParty} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Beach Party</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-4 colEvent">
            <Card>
              <Card.Img variant="top" src={Conference} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Conference</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-4 colEvent">
            <Card>
              <Card.Img variant="top" src={Diwali} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Festival of lights</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-4 colEvent">
            <Card>
              <Card.Img variant="top" src={Soccer} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Soccer Match</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-4 colEvent">
            <Card>
              <Card.Img variant="top" src={RetroNight} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Join for a Retro Night</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DisplayEvents;

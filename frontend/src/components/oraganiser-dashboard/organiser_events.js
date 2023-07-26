import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Collapse } from "react-collapse";
import "./EventList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


function Organiser_events() {

  const [cardExpandStates, setCardExpandStates] = useState({});

  const toggleCollapse = (cardNumber) => {
    setCardExpandStates((prevState) => ({
      ...prevState,
      [cardNumber]: !prevState[cardNumber],
    }));
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const response = await fetch('http://localhost:5050/organiserDashboard/eventsList/')
    const jsonData = await response.json();
    setData(jsonData.events);
  }
  

    return (
      <>
        <div
          class="row"
          style={{ paddingTop: "20px", justifyContent: "center" }}
        >
 
          <p class="col-6" style={{ textAlign: "center", marginLeft: "8%" }}>
            <input
              class="search"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginTop: "2%",
                padding: "5px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="Search for an Event.."
            ></input>
          </p>
          <p class="col-2" style={{ textAlign: "left", marginTop: "1%" }}>
            {/* taken from  https://fontawesome.com/ */}
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </p>
        </div>
        <div className="container EventList" style={{ marginBottom: "20%" }}>
        {data.map((event, index) => (
          <div key={index}>
            <h2>Event {event.eventId}</h2>
            <p>Event Venue: {event.eventVenue}</p>
            <p>Event Date:</p>
            {/* Add more properties here as needed */}
            <Card className="text-center">
            <Card.Header
              style={{ textAlign: "left" }}
              onClick={() => toggleCollapse("c"+index)}
            >
              <div class="row">
                <h3 class="col-10">{event.eventVenue}</h3>
                <p class="drop-icon">
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
              <p>Hosted On:  {event.eventDate}</p>
            </Card.Header>
            <Collapse isOpened={cardExpandStates["c"+index]}>
              <Card.Body>
                <Card.Title>Event Description</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vel nunc vel ante vulputate ullamcorper. Nulla tincidunt risus
                  malesuada nisi euismod blandit. Etiam eu mi ullamcorper,
                  semper metus ut, volutpat nulla. Pellentesque vehicula sed
                  eros a molestie. Pellentesque ullamcorper tristique velit,
                  eget vulputate turpis cursus a. Ut porta mollis purus.
                  Pellentesque non lorem nulla. Sed ac quam non ex dapibus
                  blandit at tempor erat. Donec pulvinar vel justo a mollis.
                  Donec at mattis magna. Nunc massa leo, posuere et dictum
                  vitae, bibendum consequat purus. Etiam at pharetra augue{" "}
                </Card.Text>
              </Card.Body>
            </Collapse>
          </Card>
          </div>
        ))}
        </div>
      </>
    );
  
}

export default Organiser_events;

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
    const response = await fetch('https://eventmaster.onrender.com/organiserDashboard/eventsList/')
    const jsonData = await response.json();
    setData(jsonData.events);
  }
  

    return (
      <>
        <div
          class="row"
          style={{ paddingTop: "20px", justifyContent: "center" }}
        >
        </div>
        <div className="container EventList" style={{ marginBottom: "20%" }}>
        {data.map((event, index) => (
          <div key={index}>
            {/* Add more properties here as needed */}
            <Card className="text-center">
            <Card.Header
              style={{ textAlign: "left" }}
              onClick={() => toggleCollapse("c"+index)}
            >
              <div class="row">
                <h3 class="col-10">{event.eventName}</h3>
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
                {event.description}
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

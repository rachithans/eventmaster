import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Collapse } from "react-collapse";
import "./EventList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function Organiser_Feedback() {
  const [cardExpandStates, setCardExpandStates] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  const toggleCollapse = (cardNumber) => {
    setCardExpandStates((prevState) => ({
      ...prevState,
      [cardNumber]: !prevState[cardNumber],
    }));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      const response = await fetch('https://eventmaster.onrender.com/organiserDashboard/eventsList/')
      const jsonData = await response.json();
      setData(jsonData.events);
      setLoading(false); // Set loading to false once data is fetched
      console.log(jsonData.events);
    } catch (error) {
      console.error("Error fetching event reviews:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  }

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <>
      <div className="row" style={{ paddingTop: "20px", justifyContent: "center" }}>
  
 
      </div>
      <div className="container EventList" style={{ marginBottom: "20%" }}>
        {data.map((event, index) => (
          <div key={index}>
            <Card className="text-center">
              <Card.Header
                style={{ textAlign: "left" }}
                onClick={() => toggleCollapse("c" + index)}
              >
                <div className="row">
                  <h3 className="col-7">{event.eventName}</h3>
                  <p className="col-3 "> overallRating:             
                  {event.overallRating == 5 &&(
          <span className="ms-2" >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}{event.overallRating >= 4 && event.overallRating < 5 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
     
          </span>
        )}{event.overallRating >= 3 && event.overallRating < 4 && (
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        )}{event.overallRating >= 2 && event.overallRating < 3 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}
        {event.overallRating >= 1 &&  event.overallRating < 2 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}</p>

                  <p className="drop-icon col-2">

                    <FontAwesomeIcon icon={faCaretDown} />
                  </p>
                </div>
                <p>Hosted On: {event.eventDate}</p>
              </Card.Header>
              <Collapse isOpened={cardExpandStates["c" + index]}>
                <Card.Body>
                  <Card.Title>Event Feedback</Card.Title>
                  <Card.Text style={{ textAlign: 'initial' }}>
                    {event.eventReviews.map((review, reviewIndex) => (
                      <div key={reviewIndex}>
                        <p>Attendee ID: {review.attendeeId}</p>
                        <p>Review: {review.review}</p>
                        <p>Rating: {review.rating}</p>
                        <hr></hr>
                      </div>
                    ))}
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

export default Organiser_Feedback;

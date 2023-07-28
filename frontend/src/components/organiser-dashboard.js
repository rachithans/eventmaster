import "bootstrap/dist/css/bootstrap.min.css";

import Organiser_events from "./oraganiser-dashboard/organiser_events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Revenue from "./oraganiser-dashboard/revenue";
import FeedbacksClass from "./oraganiser-dashboard/feedback";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"


function Organiser_Dashboard() {
  useEffect(() => {
    fetchOverallDetails();
  });

  async function fetchOverallDetails(){
   const response = await fetch('https://eventmaster.onrender.com/organiserDashboard/organiser-dashboard/')
    const data = await response.json()
    setTotalTickets(data.totalTickets);
    setTotalEvents(data.totalEvents);
    setTotalCollection(data.totalCollection)
    setOverallRating(data.averageOverallRating)
    console.log(data)
  }
 
  const [testVisible, setTestVisible] = useState(false);
  const [revnueVisible, setRevenueVisible] = useState(false);
  const [feedbackVisible, setfeedbackVisible] = useState(false);
  const [totalTickets, setTotalTickets] = useState(0); // Initialize with a default value
  const [totalEvents, setTotalEvents] = useState(0); // Initialize with a default value
  const [totalCollection, setTotalCollection] = useState(0); // Initialize with a default value
  const [EventsData, setEventsData] = useState(null); // Initialize with a default value
  const [overallRating, setOverallRating] =  useState(0); 


  
  const toggleTestVisibility = () => {
    setTestVisible(true);
    setRevenueVisible(false);
    setfeedbackVisible(false);
  };
  
  const toggleRevenueVisibility = () => {
    setRevenueVisible(true);
    setTestVisible(false);
    setfeedbackVisible(false);
  };
  
  const toggleFeedbackVisibility = () => {
    setfeedbackVisible(true);
    setTestVisible(false);
    setRevenueVisible(false);
  };
if(totalEvents==0){
  return(  <p>Sorry You there is no Data to display as no event has been hosted yet</p>
  )
}else{
  return (
    <div className="App" style={{ minHeight: "100vh;" }}>

      <div
        class="jumbo"
        style={{
          marginTop: "80px",
          marginRight: "10%",
          marginLeft: "10%",
          background: "#6c757d",
        }}
      >
        <h1>Overview</h1>

        <div class="row " style={{ justifyContent: "center" }}>
          <div class="row" style={{ justifyContent: "center" }}>
            <div class="card col-6" style={{ width: "18rem" }}>
              <p style={{ fontSize: "3rem" }}>#{totalEvents}</p>
              <div class="card-body organiser-card-body">
                <h5 class="card-title organiser-card-title">Total Events</h5>
              </div>
            </div>

            <div class="card col-6" style={{ width: "18rem" }}>
              <p style={{ fontSize: "3rem" }}> #{totalTickets}</p>
              <div class="card-body organiser-card-body">
                <h5 class="card-title organiser-card-title">Total Tickets Sold</h5>
              </div>
            </div>
          </div>

          <div class="card col-6" style={{ width: "18rem" }}>
            <p style={{ fontSize: "3rem" }}>${totalCollection}</p>
            <div class="card-body organiser-card-body">
              <h5 class="card-title organiser-card-title">Total Revenue Generated</h5>
            </div>
          </div>
          <div class="card col-6" style={{ width: "18rem" }}>
            <p style={{ fontSize: "3rem" }}>           {overallRating == 5 &&(
          <span className="ms-2" >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}{overallRating >= 4 && overallRating < 5 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
     
          </span>
        )}{overallRating >= 3 && overallRating < 4 && (
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        )}{overallRating >= 2 && overallRating < 3 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}
        {overallRating >= 1 &&  overallRating < 2 &&(
          <span className="ms-2">
            <FontAwesomeIcon icon={faStar} />

          </span>
        )}</p>
            <div class="card-body organiser-card-body">
              <h5 class="card-title organiser-card-title">Overall Ratings</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginRight: "10%", marginLeft: "10%" }}
        class="d-flex mt-5 justify-content-around"
      >
        <button class="col-md-3" onClick={toggleTestVisibility}>
          Events List <FontAwesomeIcon icon={faListCheck} />
        </button>
        <button class="col-md-3" onClick={toggleRevenueVisibility}>
          Revenue <FontAwesomeIcon icon={faDollarSign} />
        </button>
        <button class="col-md-3" onClick={toggleFeedbackVisibility}>
          Feedback <FontAwesomeIcon icon={faComment} />
        </button>
      </div>
      <br></br>
      <div class="mt-5 "></div>
      <div
        class="jumbotron "
        style={{ marginLeft: "10%", marginRight: "10%", backgroundColor: "" }}
      >
        {testVisible && <Organiser_events />}
        {revnueVisible && <Revenue />}
        {feedbackVisible && <FeedbacksClass />}
      </div>

    </div>
  );
        }
}

export default Organiser_Dashboard;

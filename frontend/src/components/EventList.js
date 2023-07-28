import React, { useEffect, useState } from "react";

export default function EventList({ userId }) {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    const response = await fetch(
      `http://localhost:5050/events/eventlist?userId=${userId}`
    );
    const records = await response.json();
    setRecords(records);

    const initialCount = [];
    records.forEach((record) => {
      initialCount[record.eventId] = 0;
    });
    setCount(initialCount);
  };

  useEffect(() => {
    getRecords();
  }, []);

  const btn1 = "Ask Questions";

  const [count, setCount] = useState([]);

  // https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook
  const countDecrease = (eventId) => {
    if (count[eventId] > 0) {
      setCount((prevCount) => ({
        ...prevCount,
        [eventId]: prevCount[eventId] - 1,
      }));
    }
  };

  const countIncrease = (eventId) => {
    setCount((initialCount) => ({
      ...initialCount,
      [eventId]: initialCount[eventId] + 1,
    }));
  };

  const handleBooking = async (eventId, qty) => {
    const data = {
      userId: userId,
      eventId: eventId,
      qty: qty,
    };

    try {
      const response = await fetch(
        "http://localhost:5050/events/eventbooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Booking Successful!!");
      
    } catch (error) {
      console.log("Booking Failed!!", error);
    }
  };

  return (
    <div className="container my-4">
      {records.map((record) => (
        <div className="card" key={record.eventId}>
          <div className="card-body d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <div className="">
                <div className="d-flex justify-content-between flex-column flex-sm-row">
                  <h2>{record.eventName}</h2>
                  <p className="mx-sm-3 d-sm-block">{record.eventDate}</p>
                </div>
                <h5>{record.eventVenue}</h5>
              </div>
            </div>

            {/* Url: https://codepen.io/rkoms/pen/OJbrGKX) 
              Used for taking idea about counter to keep track of number of registration
              Accessed On: 30 May, 2023*/}

            
            <div className="d-flex justify-content-between align-items-center">
            <div className=" text-center mx-5">
              <button
                onClick={() => countDecrease(record.eventId)}
                className="set-count-btn"
              >
                -
              </button>
              <input
                value={count[record.eventId]}
                readOnly
                className="input-count"
                id={record.eventId}
              ></input>
              <button
                onClick={() => countIncrease(record.eventId)}
                className="set-count-btn"
              >
                +
              </button>
            </div>
              <button className="booking-button bg-primary">Ask Questions</button>
              <button
                className="booking-button green"
                onClick={() =>
                  handleBooking(record.eventId, count[record.eventId])
                }
                data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                Book Now
              </button>

              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={getRecords}>Close</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

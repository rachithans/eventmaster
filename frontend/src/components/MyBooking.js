import React, { useEffect, useState } from "react";

export default function MyBooking({ userId }) {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    const response = await fetch(
      `http://localhost:5050/bookings/mybookings?userId=${userId}`
    );
    const records = await response.json();
    setRecords(records);

    const initialCount = [];
    records.forEach((record) => {
      initialCount[record.eventId] = record.qty;
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

  const handleCancellation = async (eventId) => {
    const data = {
      userId: userId,
      eventId: eventId,
    };
    console.log("hello");
    try {
      const response = await fetch(
        "http://localhost:5050/bookings/eventcancellation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Cancellation Successful!!");
      getRecords();
    } catch (error) {
      console.log("Cancellation Failed!!", error);
    }
  };

  const handleModification = async (eventId, qty) => {
    const data = {
      userId: userId,
      eventId: eventId,
      qty: qty,
    };

    try {
      const response = await fetch(
        "http://localhost:5050/bookings/eventmodification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Booking Successful!!");
      setTimeout(200);
      getRecords();
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
              <button className="booking-button bg-primary" onClick={() =>
                  handleModification(record.eventId, count[record.eventId])
                }>
                Modify Booking
              </button>
              <button
                className="booking-button red"
                onClick={() => handleCancellation(record.eventId)}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

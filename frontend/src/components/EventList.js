// Author: Sahil Sorathiya

import React, { useEffect, useState } from "react";

export default function EventList({ userId }) {
  const [records, setRecords] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [count, setCount] = useState([]);

  //function is used to get all the events
  const getRecords = async () => {
    const response = await fetch(
      `https://eventmaster.onrender.com/events/eventlist?userId=${userId}`
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

  // https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook
  // https://stackoverflow.com/questions/47647269/how-to-get-spread-operator-updating-state-with-react

  // function incremening or decrementing the number
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

  // function to handle the booking of the tickets
  const handleBooking = async (eventId, qty, price) => {
    if (qty > 0) {
      const data = {
        userId: userId,
        eventId: eventId,
        qty: qty,
      };

      try {
        const response = await fetch(
          "https://eventmaster.onrender.com/events/eventbooking",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        setModalTitle("Booking Successful!!");
        setModalBody([
          "Your ticket are booked. Enjoy your  event.",
          `Total Price ($${price * qty}) = Qty(${qty}) X Price($${price})`,
        ]);
      } catch (error) {
        setModalTitle("Booking Failed!!");
        setModalBody(["Please try again.", ``]);
      }
    } else {
      setModalTitle("Please Enter Number of Tickets");
      setModalBody(["Use '+' button to enter number of tickets.", ``]);
    }
  };

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  const splitdate = (date) => {
    var eventDate = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return [
      `${eventDate.getUTCFullYear()}, ${
        months[eventDate.getUTCMonth()]
      } ${eventDate.getUTCDate()}`,
      `${eventDate.getUTCHours()}:${eventDate
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}`,
    ];
  };

  return (
    <div className="container my-4">
      {records.map((record) => (
        <div className="card" key={record.eventId}>
          <div className="card-body">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
              <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div className="">
                  <div className="d-flex justify-content-between flex-column flex-sm-row">
                    <h2>{record.eventName}</h2>
                    <p className="mx-sm-3 d-sm-block">
                      {splitdate(record.eventDate)[0]}&nbsp;&nbsp;&nbsp;&nbsp;
                      {splitdate(record.eventDate)[1]}
                    </p>
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
                <button className="normal-button">Ask Questions</button>
                <button
                  className="booking-button"
                  onClick={() =>
                    handleBooking(
                      record.eventId,
                      count[record.eventId],
                      record.ticketPrice
                    )
                  }
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Book Now
                </button>

                {/* https://getbootstrap.com/docs/5.3/components/modal/ */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          {modalTitle}
                        </h1>
                      </div>
                      <div className="modal-body">
                        <p>{modalBody[0]}</p>
                        <p>{modalBody[1]}</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="bg-primary"
                          data-bs-dismiss="modal"
                          onClick={getRecords}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2">{record.description}</p>
            <p>
              <b className="price">${record.ticketPrice}</b>/ticket
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

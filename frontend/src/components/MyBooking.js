// Author: Sahil Sorathiya
import React, { useEffect, useState } from "react";

export default function MyBooking({ userId }) {
  const [records, setRecords] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState(["", ""]);
  const [count, setCount] = useState([]);
  const [checkCount, setCheckCount] = useState([]);
  const [bookings, setBookings] = useState("True");

  // function used to get all booking list
  const getRecords = async () => {
    const response = await fetch(
      `https://eventmaster.onrender.com/bookings/mybookings?userId=${userId}`
    );
    const records = await response.json();
    if (records.length === 0) {
      setBookings("False");
    }
    console.log(records.length);
    setRecords(records);

    const initialCount = [];
    records.forEach((record) => {
      initialCount[record.eventId] = record.qty;
    });
    setCount(initialCount);
    setCheckCount(initialCount);
  };

  useEffect(() => {
    getRecords();
  }, []);

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

  const handleCancellation = async (eventId, price) => {
    const data = {
      userId: userId,
      eventId: eventId,
    };

    try {
      const response = await fetch(
        "https://eventmaster.onrender.com/bookings/eventcancellation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setModalTitle("Cancellation Successful!!");
      setModalBody([
        "Your tickets are cancelled. Have a nice day.",
        `Return amount ($${price * checkCount[eventId]}) = Qty(${
          checkCount[eventId]
        }) X Price($${price})`,
      ]);
    } catch (error) {
      setModalTitle("Cancellation Failed!!");
      setModalBody(["Please try again.", ``]);
    }
  };

  const handleModification = async (eventId, qty, price) => {
    if (count[eventId] === checkCount[eventId]) {
      setModalTitle("Please Modify Tickets");
      setModalBody([
        "Please user '-' to decrease the number of tickets or '+' to increase the number of tickets.",
      ]);
    } else if (qty > 0) {
      const data = {
        userId: userId,
        eventId: eventId,
        qty: qty,
      };

      try {
        const response = await fetch(
          "https://eventmaster.onrender.com/bookings/eventmodification",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        setModalTitle("Modification Successful!!");
        setModalBody([
          "Your ticket are modified. Enjoy your  event.",
          `New Total Price ($${price * qty}) = Qty(${qty}) X Price($${price})`,
        ]);
        setTimeout(200);
        getRecords();
      } catch (error) {
        setModalTitle("Modify Failed!!");
        setModalBody(["Please try again.", ``]);
      }
    } else {
      setModalTitle("Please Enter Number of Tickets");
      setModalBody([
        "To modify the tickets, you should have atleast 1 ticket.",
        ``,
      ]);
    }
  };

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
      {bookings == "False" && (
        <h3 className="text-center">No Bookings available!!</h3>
      )}
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
                <button
                  className="normal-button"
                  onClick={() =>
                    handleModification(
                      record.eventId,
                      count[record.eventId],
                      record.ticketPrice
                    )
                  }
                  data-bs-toggle="modal"
                  data-bs-target="#modifyButton"
                >
                  Modify Booking
                </button>

                {/* https://getbootstrap.com/docs/5.3/components/modal/ */}
                <div
                  className="modal fade"
                  id="modifyButton"
                  tabindex="-1"
                  aria-labelledby="modifyButtonLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modifyButtonLabel">
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

                <button
                  className="cancel-button"
                  onClick={() =>
                    handleCancellation(record.eventId, record.ticketPrice)
                  }
                  data-bs-toggle="modal"
                  data-bs-target="#cancelButton"
                >
                  Cancel Booking
                </button>

                {/* https://getbootstrap.com/docs/5.3/components/modal/ */}

                <div
                  className="modal fade"
                  id="cancelButton"
                  tabindex="-1"
                  aria-labelledby="cancelButtonLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="cancelButtonLabel">
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
              <b className="price">
                Total Payment: $
                {checkCount[record.eventId] * record.ticketPrice}
              </b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

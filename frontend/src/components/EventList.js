// Author: Sahil Sorathiya

import React, { useEffect, useState } from "react";

export default function EventList({ userId }) {
  const [records, setRecords] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("", "", "error");
  const [count, setCount] = useState([]);
  const [submit, setSubmit] = useState(true);

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
  }, [userId]);

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
        await fetch("https://eventmaster.onrender.com/events/eventbooking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        setModalTitle("Booking Failed!!");
        setModalBody(["Please try again.", ``]);
      }
    }

    clearForm();

    setTimeout(200);
    getRecords();
  };

  const getPrice = (qty, price) => {
    if (qty > 0) {
      setModalTitle("Payment Details");
      setModalBody([
        "Your ticket are booked. Enjoy your  event.",
        `Total Price ($${price * qty}) = Qty(${qty}) X Price($${price})`,
      ]);
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
      `${eventDate.getUTCFullYear()}, ${months[eventDate.getUTCMonth()]
      } ${eventDate.getUTCDate()}`,
      `${eventDate.getUTCHours()}:${eventDate
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}`,
    ];
  };

  const clearForm = () => {
    document.getElementById("cardNumberValidation").textContent = "";
    document.getElementById("cardNumber").value = "";

    document.getElementById("cardCvvValidation").textContent = "";
    document.getElementById("cvv").value = "";

    document.getElementById("nameValidation").textContent = "";
    document.getElementById("cardHolderName").value = "";

    document.getElementById("dateValidation").textContent = "";
    document.getElementById("expiryDate").value = "";

    setSubmit(true);

    console.log("document.getElementById().value");
  };

  const validateCardNumber = () => {
    const cardNumberInput = document.getElementById("cardNumber").value;
    if (/\d{16}/.test(cardNumberInput)) {
      document.getElementById("cardNumberValidation").textContent = "";
    } else {
      document.getElementById("cardNumberValidation").textContent =
        "Please enter 16 digit number only.";
    }
    validate();
  };

  const validateCvv = () => {
    const cvvInput = document.getElementById("cvv").value;
    if (/\d{3}/.test(cvvInput)) {
      document.getElementById("cardCvvValidation").textContent = "";
    } else {
      document.getElementById("cardCvvValidation").textContent =
        "Please enter 3 digit number only.";
    }
    validate();
  };

  const validateName = () => {
    const nameInput = document.getElementById("cardHolderName").value;
    if (/[a-zA-Z\s]+/.test(nameInput)) {
      document.getElementById("nameValidation").textContent = "";
    } else {
      document.getElementById("nameValidation").textContent =
        "Please enter alphabets only.";
    }
    validate();
  };

  const validateDate = () => {
    const dateInput = document.getElementById("expiryDate").value;
    if (/[0-9\/]+/.test(dateInput)) {
      document.getElementById("dateValidation").textContent = "";
    } else {
      document.getElementById("dateValidation").textContent =
        "Please enter valid date";
    }
    validate();
  };

  const validate = () => {
    const cvvInput = document.getElementById("cvv").value;
    const cardNumberInput = document.getElementById("cardNumber").value;
    const nameInput = document.getElementById("cardHolderName").value;
    const dateInput = document.getElementById("expiryDate").value;

    if (
      /\d{3}/.test(cvvInput) &&
      /\d{16}/.test(cardNumberInput) &&
      /[a-zA-Z\s]+/.test(nameInput) &&
      /[0-9\/{1}]+/.test(dateInput)
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
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
                    <span className="mx-sm-3">
                      {splitdate(record.eventDate)[0]}&nbsp;&nbsp;&nbsp;&nbsp;
                      {splitdate(record.eventDate)[1]}
                    </span>
                  </div>
                  <h5>{record.eventVenue}</h5>
                </div>
              </div>

              {/* Url: https://codepen.io/rkoms/pen/OJbrGKX) 
              Used for taking idea about counter to keep track of number of registration
              Accessed On: 30 May, 2023*/}

              <div className="d-flex justify-content-between align-items-center">
                <div className=" text-center">
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
                <div className="">
                  <button
                    className="booking-button"
                    onClick={() =>
                      getPrice(count[record.eventId], record.ticketPrice)
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Now
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
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
                        {modalBody[0] ===
                          "Use '+' button to enter number of tickets." ? (
                          <div>{modalBody[0]}</div>
                        ) : (
                          <div>
                            <div className="form-group m-2">
                              <label htmlFor="cardNumber">Card Number</label>
                              <input
                                type="integer"
                                className="form-control"
                                id="cardNumber"
                                placeholder="Enter 16 digits card number"
                                maxLength="16"
                                onInput={validateCardNumber}
                                required
                              />
                              <div
                                id="cardNumberValidation"
                                className="form-text text-danger"
                              ></div>
                            </div>
                            <div className="form-group m-2">
                              <label htmlFor="cardHolderName">
                                Card Holder Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="cardHolderName"
                                placeholder="Enter card holder name"
                                onInput={validateName}
                                required
                              />
                              <div
                                id="nameValidation"
                                className="form-text text-danger"
                              ></div>
                            </div>
                            <div className="form-group m-2">
                              <label htmlFor="expiryDate">Expiry Date</label>
                              <input
                                type="text"
                                className="form-control"
                                id="expiryDate"
                                placeholder="MM/YY"
                                onInput={validateDate}
                                required
                              />
                              <div
                                id="dateValidation"
                                className="form-text text-danger"
                              ></div>
                            </div>
                            <div className="form-group m-2">
                              <label htmlFor="cvv">CVV</label>
                              <input
                                type="text"
                                className="form-control"
                                id="cvv"
                                placeholder="CVV"
                                maxLength="3"
                                onInput={validateCvv}
                                required
                              />
                              <div
                                id="cardCvvValidation"
                                className="form-text text-danger"
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="modal-footer">
                        {modalBody[0] ===
                          "Use '+' button to enter number of tickets." ? (
                          <button
                            type="button"
                            className="normal-button"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        ) : (
                          <div>
                            <button
                              type="button"
                              className="normal-button"
                              onClick={clearForm}
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="submit"
                              id="submitButton"
                              className="booking-button"
                              onClick={() => {
                                handleBooking(
                                  record.eventId,
                                  count[record.eventId],
                                  record.ticketPrice
                                );
                              }}
                              data-bs-dismiss="modal"
                              disabled={submit ? true : false}
                            >
                              Submit Payment
                            </button>
                          </div>
                        )}
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

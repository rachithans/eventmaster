import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/mybookings", async (req, res) => {
  let collection = await db.collection("Events");
  let events = await collection.find({}).toArray();

  let collectionAttnd = await db.collection("Attendees");
  let objUserId = new ObjectId(req.query.userId);
  
  let attendee = await collectionAttnd.findOne({ userID: objUserId });
  console.log(objUserId);
  const attended = attendee.bookedTickets.map((ticket) => ticket.eventID);

  // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
  events = events.filter((event) => attended.includes(event.eventId));

  events = events.map(event => ({
    ...event,
    qty: (attendee.bookedTickets.find(ticket=> ticket.eventID === event.eventId)).ticketQuantity
  }));
  

  res.send(events).status(200);
//   console.log(events);
});

router.post("/eventcancellation", async (req, res) => {

    const {userId, eventId} = req.body
    let collection = await db.collection("Attendees");
    let objUserId = new ObjectId(userId);
    let attendee = await collection.findOne({userID: objUserId});
    attendee.bookedTickets = attendee.bookedTickets.filter((ticket) => ticket.eventID !== eventId)
    await collection.updateOne({ _id: attendee._id }, { $set: attendee });
    res.send(attendee).status(200);

  });


  router.post("/eventmodification", async (req, res) => {

    const {userId, eventId, qty} = req.body
    let collection = await db.collection("Attendees");
    let objUserId = new ObjectId(userId);
    let attendee = await collection.findOne({userID: objUserId});
    attendee.bookedTickets = attendee.bookedTickets.map(ticket => {
        if (ticket.eventID === eventId) {
          return { ...ticket, ticketQuantity: qty };
        } else {
          return ticket;
        }
      });
    res.send(attendee).status(200);
    await collection.updateOne({ _id: attendee._id }, { $set: attendee });

  });

export default router;

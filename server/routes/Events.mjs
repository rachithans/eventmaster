import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/eventlist", async (req, res) => {
  let collection = await db.collection("Events");
  let events = await collection.find({}).toArray();

  let collectionAttnd = await db.collection("Attendees");
    let objUserId = new ObjectId(req.query.userId);
    let attendee = await collectionAttnd.findOne({userID: objUserId});

    const attended = attendee.bookedTickets.map((ticket)=> ticket.eventID);

    // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
    events = events.filter((event) => !attended.includes(event.eventId))

    res.send(events).status(200);
});


router.post("/eventbooking", async (req, res) => {

    const {userId, eventId, qty} = req.body
    let collection = await db.collection("Attendees");
    let objUserId = new ObjectId(userId);
    let attendee = await collection.findOne({userID: objUserId});
    attendee.bookedTickets.push({eventID: eventId,ticketQuantity:qty})
    res.send(attendee).status(200);
    await collection.updateOne({ _id: attendee._id }, { $set: attendee });
  });





export default router;
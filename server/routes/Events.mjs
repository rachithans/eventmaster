import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();


router.get("/eventlist", async (req, res) => {
  try {
    const collection = await db.collection("Events");
    let events = await collection.find({}).toArray();

    const collectionAttnd = await db.collection("Attendees");
    const objUserId = new ObjectId(req.query.userId);
    const attendee = await collectionAttnd.findOne({ userID: objUserId });

    if(attendee === null){
      const allAttendees = await collectionAttnd.find().toArray();
      const createAttendee = {
        attendeeID: allAttendees[allAttendees.length - 1].attendeeID+1,
        userID: objUserId,
        bookedTickets:[]
      } 
      await collectionAttnd.insertOne(createAttendee);
      attendee = await collectionAttnd.findOne({ userID: objUserId });

    }
    const attended = attendee ? attendee.bookedTickets.map((ticket) => ticket.eventID) : [];

    // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-exampless
    events = events.filter((event) => !attended.includes(event.eventId));

    res.status(200).send(events);
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/eventbooking", async (req, res) => {
  try {
    const {userId, eventId, qty} = req.body
    let collection = await db.collection("Attendees");
    let objUserId = new ObjectId(userId);
    let attendee = await collection.findOne({userID: objUserId});
    attendee.bookedTickets.push({eventID: eventId,ticketQuantity:qty})
  
    let collectionEvent = await db.collection("Events");
    let event = await collectionEvent.findOne({eventId: eventId});
    console.log(collectionEvent)
    event.totalCollection = event.totalCollection + (qty*event.ticketPrice)
    event.ticketsBooked = event.ticketsBooked + qty

    res.send(attendee).status(200);
    await collectionEvent.updateOne({ eventId: eventId }, { $set: event });
    await collection.updateOne({ _id: attendee._id }, { $set: attendee });

  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Server Error");
  }
  });





export default router;
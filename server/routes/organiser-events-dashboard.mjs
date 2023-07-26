import express from "express";
import db from "../db/conn.mjs";


const router = express.Router();


router.get("/organiser-dashboard", async (req, res) => {
    try {
        const collection = await db.collection("Organizers");
        const organizerID = 1;
        const organizer = await collection.findOne({ organizerID });
    
        if (!organizer) {
          return res.status(200).json({ events: [] });
        }
    
        const events = organizer.eventIDs || []; // If 'events' is undefined or null, set it as an empty array
        const eventsCollection = await db.collection("Events");
        const projection = { _id: 0, ticketsBooked: 1, totalCollection: 1, overallRating: 1 };
        const matchingEvents = await eventsCollection.find({ eventId: { $in: events } }, projection).toArray();
       
        const totalTickets = matchingEvents.reduce((sum, event) => sum + (event.ticketsBooked || 0), 0);
        const totalCollection = matchingEvents.reduce((sum, event) => sum + (event.totalCollection || 0), 0);
        const overallRatingsSum = matchingEvents.reduce((sum, event) => sum + (event.overallRating || 0), 0);
        const totalEvents = matchingEvents.length;
        // Calculate the average of 'overallRating'
        const averageOverallRating = overallRatingsSum / matchingEvents.length;

        return res.status(200).json({  totalTickets, averageOverallRating,totalCollection,totalEvents });  
      } catch (error) {
        console.error("Error while fetching events:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    
  });
  
  
router.get("/eventsList", async (req, res) => {
    try {
        const collection = await db.collection("Organizers");
        const organizerID = 1;
        const organizer = await collection.findOne({ organizerID });
    
        if (!organizer) {
          return res.status(200).json({ events: [] });
        }
    
        const events = organizer.eventIDs || []; // If 'events' is undefined or null, set it as an empty array
        const eventsCollection = await db.collection("Events");
        const projection = { _id: 0, ticketsBooked: 0, totalCollection: 0};
        const matchingEvents = await eventsCollection.find({ eventId: { $in: events } }, projection).toArray();

        // Calculate the average of 'overallRating'
        return res.status(200).json({ events: matchingEvents });  
      } catch (error) {
        console.error("Error while fetching events:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    
  });
  
  router.get("/organiser-dashboard/eventsList", async (req, res) => {
    try {
        const collection = await db.collection("Organizers");
        const organizerID = 1;
        const projection = { _id: 0, eventId: 1 }; // Include only the "eventId" field and exclude the "_id" field
        const organizer = await collection.findOne({ organizerID },projection);
    
        if (!organizer) {
          return res.status(200).json({ events: [] });
        }
    
        const events = organizer.eventIDs || []; // If 'events' is undefined or null, set it as an empty array
        const eventsCollection = await db.collection("Events");
        const matchingEvents = await eventsCollection.find({ eventId: { $in: events } }).toArray();
        // Calculate the average of 'overallRating'
        const eventReviews = matchingEvents.map(event => event.eventReviews || []);

        return res.status(200).json({ eventReviews });
    

        return res.status(200).json({ events: matchingEvents });  
      } catch (error) {
        console.error("Error while fetching events:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    
  });

export default router;
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();



// This section will help you create a new record.
router.post("/register", async (req, res) => {
  
  try{
    // Check if the user already exists
    let collection = await db.collection("LoginInfo");
    const user = await collection.findOne({username: req.body.username});
    if(user) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newDocument = {
    _id: req.body.id,
    username: req.body.username,
    password: hashedPassword,
    isAdmin: req.body.userType,
    name: req.body.name,
    email: req.body.email
  };
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  }
  catch (error){
    console.log(error);
    res.send("Internal server error").status(500);
  }
 
});

// This section will help you update a record by id.
router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res.status(400).send("Please provide username and password");
  }
  else{
    try{
      const user = await db.collection("LoginInfo").findOne({username});
      if(!user) {
        return res.status(400).send("Invalid username");
      }
      if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1d"});
        return res.status(200).json({token});
      }
    }
    catch(error){
      console.log(error);
      res.send("Internal server error").status(500);
    }
  }
});


export default router;
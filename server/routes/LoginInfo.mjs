// Author: Bhavya Jain
import express from "express";
import db from "../db/conn.mjs";
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const router = express.Router();
const saltRounds = 10; // Number of rounds to use for hashing

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
    if(req.body.userType === "Organizer"){
      req.body.userType = 1;
    }
    else{
      req.body.userType = 0;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    let newDocument = {
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
router.post("/loginUser", async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide email and password");
  }
  else{
    try{
      const user = await db.collection("LoginInfo").findOne({email});
      if(!user) {
        return res.status(400).send("Invalid email");
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

// This section will help you update your password
router.post("/forgotPassword", async (req, res) => {
  try{
    // Check if the user already exists
    let collection = await db.collection("LoginInfo");
    const user = await collection.findOne({email: req.body.email});
    if(!user) {
      return res.status(400).send("User not found");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    // Update the user's password
    let result = await collection.updateOne({email: req.body.email}, {$set: {password: hashedPassword}});
    res.send(result).status(204);
  }
  catch (error){
    console.log(error);
    res.send("Internal server error").status(500);
  }
 
});



export default router;
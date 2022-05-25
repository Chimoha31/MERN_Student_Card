const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = 5000;

app.use(express.json())
app.use(cors());

const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL, (err) => {
  if(err){
    console.log("There was an error to connect mongodb");
  }else{
    console.log("Succesfully connected to mongodb 🌈")
  }
})


app.get("/", (req, res) => {
  res.send("Hi test CRUD");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT} 🐣`);
})
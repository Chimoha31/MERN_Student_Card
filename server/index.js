const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentRoutes = require("./routes/student")
const cors = require('cors');
const PORT =  process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.static("build"))

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

app.use("/students", StudentRoutes);


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT} 🐣`);
})
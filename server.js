const mongoose = require("mongoose");
const express = require("express");
// const router = express.Router();
require("dotenv").config();
var cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const playersAPIRouter = require("./routes/playersAPI");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
// this is our MongoDB database
// const dbRoute = process.env.MONGODB_URI || "mongodb+srv://kaushiro:hihello@cluster0-mjdf4.mongodb.net/test?retryWrites=true";
// connects our back end code with the database
const API_PORT = process.env.PORT || 3001;
const dbRoute = process.env.MONGODB_URI ||'mongodb://heroku_tjw9610b:ufiei50scd8noa7od73ubd7qm@ds229186.mlab.com:29186/heroku_tjw9610b';
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
).then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set('port', API_PORT);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

//using the routes I created in /routes/playersAPI
app.use("/players", playersAPIRouter);
// launch our backend into a port\
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
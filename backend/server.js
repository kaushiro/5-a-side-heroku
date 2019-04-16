const mongoose = require("mongoose");
const express = require("express");
// const router = express.Router();
var cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const playersAPIRouter = require("./routes/playersAPI");

const app = express();
const API_PORT = 3001;
app.set('port', API_PORT);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
// this is our MongoDB database
// const dbRoute = process.env.MONGO_URL || "mongodb+srv://kaushiro:hihello@cluster0-mjdf4.mongodb.net/test?retryWrites=true";
// connects our back end code with the database
const dbRoute = 'mongodb://127.0.0.1:27017/players';
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
).then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//using the routes I created in /routes/playersAPI
app.use("/players", playersAPIRouter);
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
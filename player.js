
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const PlayerSchema = new Schema({
    name: String,
    rating: Number
}, {collection: 'player'});

// export the new Schema so we could modify it using Node.js
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;


const mongoose = require("mongoose");
const Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
// this will be our data base's team data structure 
const TeamSchema = new Schema({
	team:
	{ 
		players: Array,
		number: Number,
		name: String,
		color: String
	}
}, {collection:'team'});
// export the new Schema so we could modify it using Node.js
const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;


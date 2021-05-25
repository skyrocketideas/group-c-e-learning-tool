const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
	name: String,
	description: String,
	text: String,
	external_link: String,
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
	name: { type: String },
	description: { type: String },
	text: { type: String },
	external_link: { type: String },
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;

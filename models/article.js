const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	id: {
		type: String,
	},
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	resource: {
		name: String,
		description: String,
		text: String,
		external_link: String,
	},
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;

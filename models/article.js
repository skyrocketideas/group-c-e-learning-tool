const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	text: {
		type: String,
	},
	link: {
		type: String,
	},
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	id: {
		type: String,
	},
	type: {
		type: String,
	},
	body: {
		type: String,
	},
	external_link: {
		type: String,
	},
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;

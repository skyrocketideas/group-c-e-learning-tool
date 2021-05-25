const Article = require("../models/article");

const article_index = (req, res) => {
	Article.find()
		.then((result) => {
			res.render("../views/pages/relational_database", {
				relational_database: result,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	article_index,
};

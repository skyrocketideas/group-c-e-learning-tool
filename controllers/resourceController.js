const Resource = require("../models/resource");

const resource_index = (req, res) => {
	Resource.find()
		.then((result) => {
			res.render("../views/pages/resources", {
				resources: result,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	resource_index,
};

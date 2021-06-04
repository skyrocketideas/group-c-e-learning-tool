const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Pool } = require("pg");
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});
const mongoose = require("mongoose");
const articleController = require("./controllers/articleController");
const resourceController = require("./controllers/resourceController");

// mongoose
const dbURI =
	"mongodb+srv://graeme:test1234@clark-cluster.h2b1g.mongodb.net/magazine?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	// we're connected
});
// mongoose
// 	.connect(dbURI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.catch((err) => console.log(err));

express()
	.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.set("view engine", "ejs")
	.get("/", (req, res) => res.render("pages/index"))
	.get("/db", async (req, res) => {
		try {
			const client = await pool.connect();
			const result = await client.query("SELECT * FROM total_challenge_rank");
			const results = {
				results: result ? result.rows : null,
			};
			res.render("pages/db", results);
			client.release();
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		}
	})
	.get("/challenges", async (req, res) => {
		try {
			const client = await pool.connect();
			const result = await client.query("SELECT * FROM challange");
			const results = {
				results: result ? result.rows : null,
			};
			res.render("pages/challenges", results);
			client.release();
		} catch (err) {
			console.error(err);
			res.send("Error " + err);
		}
	})
	.get("/articles", articleController.article_index)
	.get("/resources", resourceController.resource_index)

	.listen(PORT, () => console.log(`Listening on ${PORT}`));

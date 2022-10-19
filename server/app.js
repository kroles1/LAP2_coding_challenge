const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const telegraph = require("./routes/telegraph");

// middleware
app.use(cors());
app.use(bodyParser.json());

// default 
app.get("/", (req, res) => {
	res.send("Welcome to Telegraph");
});

// router
app.use("/telegraph", telegraph);

module.exports = app;

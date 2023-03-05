const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// const proxy = require('http-proxy-middleware')
require("dotenv").config({ path: "./.env" });
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
require("./db/conn");
const User = require("./models/User");
//Bosyparser middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Use Routes(Sending every API request to './routes/api/' to make it more manageable)
app.use(require("./routes/api/auth"));
// app.use("/api/users", require("./routes/api/users"));

if (process.env.NODE_ENV === "production") {
	// Static folder
	app.use(express.static("./client/out"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/out/index.html"));
	});
}

const port = process.env.PORT || 7500;

app.listen(port, () => console.log(`Server started on port ${port}`));

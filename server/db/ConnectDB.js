const mongoose = require("mongoose");
require("dotenv").config(); 
// ^^^ remember

const url = process.env.DATABASE_URL;
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log(err));

const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log(err));

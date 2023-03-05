const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema

const ItemSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
});

module.exports = Item = mongoose.model("item", ItemSchema);

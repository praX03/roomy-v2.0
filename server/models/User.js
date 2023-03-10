const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

// Creating Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	cpassword: {
		type: String,
		required: true,
	},
	college: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	accepted: [{ type: ObjectId, ref: "user" }],
	crossAccepted: [{ type: ObjectId, ref: "user" }],
	declined: [{ type: ObjectId, ref: "user" }],
	matched: [{ type: ObjectId, ref: "user" }],
	messages: [
		{
			name: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
				unique: true,
			},
			message: {
				type: String,
				required: true,
			},
		},
	],
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
		this.cpassword = await bcrypt.hash(this.cpassword, 12);
	}
	next();
});
UserSchema.methods.generateAuthToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
		this.tokens = this.tokens.concat({ token: token });
		await this.save();
		return token;
	} catch (err) {
		console.log(err);
	}
};

UserSchema.methods.addMessage = async function (name, email, message) {
	try {
		this.messages = this.messages.concat({ name, email, message });
		await this.save();
		return this.messages;
	} catch (err) {
		console.log(err);
	}
};

module.exports = User = mongoose.model("user", UserSchema);

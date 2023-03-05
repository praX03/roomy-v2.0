const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const authenticate = require("../../middleware/authenticate");
const { sendStatusCode } = require("next/dist/next-server/server/api-utils");
const mongoose = require("mongoose");

router.post("/register", async (req, res) => {
	const { name, email, phone, password, cpassword, college } = req.body;
	// Validations
	if (!name || !email || !password || !cpassword || !college || !phone) {
		return res.status(422).json({ error: "Please enter all fields" });
	}
	try {
		// Check for existing user
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res.status(422).json({ msg: "User already exists!" });
		} else if (password != cpassword) {
			return res.status(422).json({ msg: "Passwords Do Not Match" });
		} else {
			const user = new User({
				name,
				email,
				phone,
				password,
				cpassword,
				college,
			});
			await user.save();
			res.status(201).json({ message: "User Registered Successfully" });
		}
	} catch (err) {
		console.log(err);
	}
});
// Login Route
router.post("/signIn", async (req, res) => {
	try {
		let token;
		const { email, password } = req.body;
		// Validations
		if (!email || !password) {
			return res.status(400).json({ msg: "Please Enter All Fields" });
		}
		const userLogin = await User.findOne({ email: email });
		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);
			token = await userLogin.generateAuthToken();
			res.cookie("jwtoken", token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true,
			});
			// Check for existing user

			if (!isMatch) {
				return res.status(400).json({ msg: "Invalid Credentials" });
			} else {
				res.json({ message: "User Signed In Successfully", token });
			}
		} else {
			return res.status(400).json({ msg: "Invalid Credentials" });
		}
	} catch (err) {
		console.log(err);
	}
});

// @route   Get /user-dashboard
// @desc    Get a page
// @access  Private
router.get("/user-dashboard", authenticate, (req, res) => {
	res.send(req.rootUser);
});

// @route   Get /user-data
// @desc    Get a page
// @access  Private
// Data for Contact and Logged In landing
router.get("/getdata", authenticate, (req, res) => {
	res.send(req.rootUser);
});

// @route   POST /user-contact
// @desc    Post a user message
// @access  Private
// Logged In user message
router.post("/user-contact", authenticate, async (req, res) => {
	try {
		const { name, email, message } = req.body;
		if (!name || !email || !message) {
			return res.json({ error: "Please fill all the fields" });
		}
		const userContact = await User.findOne({ _id: req.userID });
		if (userContact) {
			const userMessage = await userContact.addMessage(name, email, message);
			await userContact.save();
			res.status(201).json({ message: "Contact details recieved" });
		}
	} catch (err) {
		console.log(err);
	}
});

// // @route   Get /listUsers
// // @desc    Get list of all users data
// // @access  Private
// // Get list of all users
router.get("/listUsers", authenticate, (req, res) => {
	User.find(
		{},
		// { messages: 0, tokens: 0, password: 0, cpassword: 0, phone: 0 },
		function (err, result) {
			if (err) {
				console.log(err);
			} else {
				// res.status(200).send(
				// 	result.filter((user) => {
				// 		return (
				// 			user._id.toString() !== req.userID.toString() // To remove sending logged in user as a result
				// 		);
				// 	})
				// );

				// let filteredArray = [];

				const filteredArray = new Set();

				result.map((user) => {
					req.rootUser.declined.map((declinedUser) => {
						if (declinedUser.toString() !== user._id.toString()) {
							filteredArray.add(user);
						}
					});
				});

				filteredArray.forEach((user) => {
					if (user._id.toString() == req.rootUser._id.toString()) {
						filteredArray.delete(user);
					}
				});

				filteredArray.forEach((user) => {
					console.log(user._id);
				});

				res.status(200).json([...filteredArray]);

				// res.status(200).write(
				// 	req.rootUser.declined.filter((current) => {
				// 		console.log(current, user._id, "test");
				// 		return current.toString() !== user._id.toString();
				// 	})
				// );
				// res.status(200).write(result, req.rootUser);
				// console.log(req.rootUser.declined);
			}
		}
	);
});

// Sending notifications
router.get("/notifs", authenticate, (req, res) => {
	const Accepted = [];
	User.findById(req.userID)
		.populate("crossAccepted")
		.then((user) => {
			res.status(200).json(user.crossAccepted);
		})
		.catch((err) => {
			console.log(err);
		});
});

// Implementing Accpeted side
router.put("/accepted", authenticate, (req, res) => {
	res.send(req.userID);
	User.findByIdAndUpdate(
		req.body.followId,
		{
			$set: { crossAccepted: req.userID },
		},
		{
			new: true,
		},
		(err, result) => {
			if (err) {
				return res.status(422).json({ error: err });
			}
			User.findByIdAndUpdate(
				req.userID,
				{
					$set: { accepted: req.body.followId },
				},
				{ new: true }
			)
				.select("-password")
				.then((result) => {
					res.json(req.userID);
				})
				.catch((err) => {
					return res.status(422).json({ error: err });
				});
		}
	);
	// {
	// 	$setIntersection: [accepted, crossAccepted];
	// }
});
router.put("/test", (req, res) => {
	User.aggregate([
		{
			$project: {
				com: {
					$setIntersection: [
						"$req.userID.accepted",
						"$req.userID.crossaccepted",
					],
				},
			},
		},
	])
		.then((result) => {
			res.json(result);
			res.send(result);
		})
		.catch((err) => {
			return res.status(422).json({ error: err });
		});
	res.send(User.com);
});

// Implementing declined side
router.put("/declined", authenticate, (req, res) => {
	res.send(req.userID);
	User.findByIdAndUpdate(
		req.body.followId,
		{
			$push: { crossDeclined: req.userID },
		},
		{
			new: true,
		},
		(err, result) => {
			if (err) {
				return res.status(422).json({ error: err });
			}
			User.findByIdAndUpdate(
				req.userID,
				{
					$push: { declined: req.body.followId },
				},
				{ new: true }
			)
				.select("-password")
				.then((result) => {
					res.json(req.userID);
				})
				.catch((err) => {
					return res.status(422).json({ error: err });
				});
		}
	);
});

// @route   Get /logout
// @desc    Get a page
// @access  Private
// Data for Contact and Logged In landing
router.get("/logout", authenticate, (req, res) => {
	res.clearCookie("jwtoken", { path: "/" });
	res.status(200).send("User Logout");
});

module.exports = router;

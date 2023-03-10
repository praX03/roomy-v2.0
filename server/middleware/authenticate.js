const jwt = require("jsonwebtoken");
const User = require("../models/User");

const Authenticate = async (req, res, next) => {
	try {
		const token = req.cookies.jwtoken;
		const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
		const rootUser = await User.findOne({
			_id: verifyToken._id,
			"tokens.token": token,
		});
		if (!rootUser) {
			throw new Error("User Not Found");
		}
		req.token = token;
		req.rootUser = rootUser;
		req.userID = rootUser._id;
		next();
	} catch (err) {
		res.status(401).send("No token found. Authorization denied.");
	}
};

module.exports = Authenticate;

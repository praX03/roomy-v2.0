/** @jsx jsx */
import axios from "axios";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import {
	Container,
	Flex,
	Box,
	Button,
	Input,
	Text,
	Heading,
	Textarea,
} from "theme-ui";

export default function Contact() {
	const router = useRouter();
	// Production code
	const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const register = (e) => {
		e.preventDefault();
		axios
			.post(`${API_URL}/api/users`, {
				name: name,
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
		// alert("Thank You for registering. You may now log in");
	};
	return (
		<section id="contact">
			<Container>
				<Box sx={styles.contentBox}>
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							Contact Us
						</Heading>
						<Text as="p" sx={styles.description}>
							Drop us your message and we'll get back to you within 24 hours
						</Text>
						<form onSubmit={register}>
							<Flex sx={styles.subscribeForm}>
								{/* <label htmlFor="email" sx={{ variant: "styles.srOnly" }}>
									Email Address
								</label> */}

								<Input
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									id="name"
									name="name"
									type="name"
									placeholder="Name"
								/>
								<Input
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
								/>

								<Textarea
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									id="message"
									name="message"
									type="message"
									placeholder="Your Message Here"
									rows={8}
								/>

								<Button
									id="registerBtn"
									type="submit"
									className="subscribe__btn"
									aria-label="Subscribe"
								>
									Submit
								</Button>
							</Flex>
						</form>
					</Box>
				</Box>
			</Container>
		</section>
	);
}
const styles = {
	contentBox: {
		backgroundColor: "primary",
		textAlign: "center",
		borderRadius: 20,
		py: ["20px", null, 50],
		mt: 2,
		zIndex: 2,
	},

	donate__btn: {
		position: "absolute",
		flexShrink: 0,
		top: "5%",
		right: ["10%"],
	},
	contentBoxInner: {
		width: ["100%", null, "540px", "600px"],
		mx: "auto",
		mt: -1,
		px: [3, 5],
	},
	title: {
		fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
		color: "white",
		lineHeight: [1.3, null, null, 1.25],
		fontWeight: "700",
		letterSpacing: ["-.5px", null, "-1.5px"],
		mb: [2, 3],
	},
	description: {
		fontSize: ["15px", 2, null, null, null, "17px", null, 3],
		color: "white",
		lineHeight: [1.85, null, null, 2],
		px: [0, null, 5],
	},
	subscribeForm: {
		mt: [4, null, null, 7],
		backgroundColor: ["transparent", "white"],
		borderRadius: [0, 20],
		overflow: "hidden",
		p: [0, 1],
		flexDirection: ["column"],
		'[type="name"]': {
			border: 0,
			borderRadius: 50,
			fontFamily: "body",
			fontSize: ["14px", null, 2],
			fontWeight: 500,
			color: "heading",
			py: 1,
			px: [4, null, 6],
			backgroundColor: ["white", "transparent"],
			height: ["72px", null, "70px"],
			textAlign: ["center", "left"],
			"&:focus": {
				boxShadow: "0 0 0 0px",
			},
			"::placeholder": {
				color: "#000",
				opacity: 1,
			},
			mb: 2,
		},
		'[type="email"]': {
			border: 0,
			borderRadius: 50,
			fontFamily: "body",
			fontSize: ["14px", null, 2],
			fontWeight: 500,
			color: "heading",
			py: 1,
			px: [4, null, 6],
			backgroundColor: ["white", "transparent"],
			height: ["72px", null, "70px"],
			textAlign: ["center", "left"],
			"&:focus": {
				boxShadow: "0 0 0 0px",
			},
			"::placeholder": {
				color: "#000",
				opacity: 1,
			},
			mb: 2,
		},
		'[type="message"]': {
			border: 0,
			borderRadius: 50,
			fontFamily: "body",
			fontSize: ["14px", null, 2],
			fontWeight: 500,
			color: "heading",
			py: 1,
			px: [4, null, 6],
			backgroundColor: ["white", "transparent"],
			overflowX: "hidden",
			height: ["72px", null, "70px"],
			textAlign: ["center", "left"],
			"&:focus": {
				boxShadow: "0 0 0 0px",
			},
			"::placeholder": {
				color: "#000",
				opacity: 1,
			},
			mb: 2,
		},
		".subscribe__btn": {
			flexShrink: 0,
			margin: "100px",
			mb: "10px",
			backgroundColor: ["text", "primary"],
			mt: [2, 0],
			py: ["15px"],
		},
	},
};

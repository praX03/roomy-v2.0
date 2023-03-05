/** @jsx jsx */
import axios from "axios";
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { Container, Flex, Box, Button, Input, Text, Heading } from "theme-ui";

export default function Subscribe() {
	// Production code
	// const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;
	const [email, setEmail] = useState();
	const subscribe = (e) => {
		e.preventDefault();
		email.length == 0
			? alert("Email field cannot be empty")
			: (axios
					.post("/api/items", { email: email })
					.then((res) => {
						console.log(res);
					})
					.catch((err) => console.log(err)),
			  alert(
					"Thank you for showing interest! We've recieved your email address."
			  ));
	};
	return (
		<section>
			<Container>
				<Box sx={styles.contentBox} id="subscribe">
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							Interested in using Roomy?
						</Heading>
						<Text as="p" sx={styles.description}>
							Drop your email ID below to join the waitlist! We'll send you a
							mail pre-launch!
						</Text>
						<form onSubmit={subscribe}>
							<Flex sx={styles.subscribeForm}>
								<label htmlFor="email" sx={{ variant: "styles.srOnly" }}>
									Email Address
								</label>
								<Input
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									id="email"
									name="email"
									type="email"
									placeholder="Enter your email address"
								/>
								<Button
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
		borderRadius: 10,
		py: ["60px", null, 8],
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
		mt: [6, null, null, 7],
		backgroundColor: ["transparent", "white"],
		borderRadius: [0, 50],
		overflow: "hidden",
		p: [0, 1],
		flexDirection: ["column", "row"],
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
			height: ["52px", null, "60px"],
			textAlign: ["center", "left"],
			"&:focus": {
				boxShadow: "0 0 0 0px",
			},
			"::placeholder": {
				color: "primary",
				opacity: 1,
			},
		},
		".subscribe__btn": {
			flexShrink: 0,
			ml: [0, 2],
			backgroundColor: ["text", "primary"],
			mt: [2, 0],
			py: ["15px"],
		},
	},
};

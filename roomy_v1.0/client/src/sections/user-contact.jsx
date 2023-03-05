/** @jsx jsx */
import axios from "axios";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import { useRef, useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";

export default function UserContact() {
	const router = useRouter();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const UserContact = async () => {
		try {
			const res = await fetch("/getdata", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				// credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			setUserData({ ...userData, name: userData.name, email: userData.email });

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			router.push("/login");
		}
	};

	useEffect(() => {
		UserContact();
	}, []);
	const handleInputs = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [name]: value });
	};
	const contactForm = async (e) => {
		e.preventDefault();
		const { name, email, message } = userData;
		const res = await fetch("/user-contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		});

		const data = await res.json();
		if (!data) {
			console.log("Unable to Send Message");
		} else {
			toast.success("Message Sent", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setUserData({ ...userData, message: "" });
		}
	};
	return (
		<section id="contact">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Container>
				<Logo src={LogoDark} />
				<Button
					sx={styles.donate__btn}
					variant="secondary"
					aria-label="Get Started"
					onClick={() => router.push("/login")}
					// style={{ pointerEvents: "none" }}
				>
					Log Out
				</Button>
				<Box sx={styles.contentBox}>
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							Contact Us
						</Heading>
						<Text as="p" sx={styles.description}>
							Drop us your message and we'll get back to you within 24 hours
						</Text>
						<form method="POST">
							<Flex sx={styles.subscribeForm}>
								{/* <label htmlFor="email" sx={{ variant: "styles.srOnly" }}>
									Email Address
								</label> */}

								<Input
									value={userData.name}
									onChange={handleInputs}
									id="name"
									name="name"
									type="name"
									placeholder="Name"
								/>
								<Input
									value={userData.email}
									onChange={handleInputs}
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
								/>

								<Textarea
									value={userData.message}
									onChange={handleInputs}
									id="message"
									name="message"
									type="message"
									placeholder="Your Message Here"
								/>

								<Button
									id="registerBtn"
									type="submit"
									className="subscribe__btn"
									aria-label="Subscribe"
									onClick={contactForm}
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

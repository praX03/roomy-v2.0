/** @jsx jsx */
import axios from "axios";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Container, Flex, Box, Button, Input, Text, Heading } from "theme-ui";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
	const router = useRouter();
	// Production code
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
		college: "",
		phone: "",
	});
	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
	};
	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, phone, college, password, cpassword } = user;
		const res = await fetch(`/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				college,
				password,
				cpassword,
			}),
		});
		const data = await res.json();
		console.log(data);
		if (res.status === 422 || !data) {
			toast.error("Regsitration Failed", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			toast.success("Regsitration Successful", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			router.push("/login");
		}
	};
	return (
		<section>
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
					Already Registered? Log In
				</Button>

				<Box sx={styles.contentBox} id="subscribe">
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							Let's Find Your Perfect Roomy
						</Heading>
						<Text as="p" sx={styles.description}>
							Please fill all the fields correctly
						</Text>
						<form method="POST">
							<Flex sx={styles.subscribeForm}>
								<Input
									value={user.name}
									onChange={handleInputs}
									id="name"
									name="name"
									type="text"
									placeholder="Name"
								/>
								<Input
									value={user.email}
									onChange={handleInputs}
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
								/>
								<Input
									value={user.phone}
									onChange={handleInputs}
									id="phone"
									name="phone"
									type="number"
									placeholder="Your Phone Number"
								/>

								<Input
									value={user.password}
									onChange={handleInputs}
									id="password"
									name="password"
									type="password"
									placeholder="Password"
								/>
								<Input
									value={user.cpassword}
									onChange={handleInputs}
									id="cpassword"
									name="cpassword"
									type="password"
									placeholder="Confirm Password"
								/>
								<Input
									value={user.college}
									onChange={handleInputs}
									id="college"
									name="college"
									type="text"
									placeholder="College"
								/>

								{/* // Breakable code
								<Input
									value={user.image}
									onChange={handleInputs}
									id="college"
									name="college"
									type="file/image"
									placeholder="College"
								/> */}

								<Button
									id="registerBtn"
									type="submit"
									className="subscribe__btn"
									aria-label="Subscribe"
									onClick={PostData}
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
		// position: "absolute",
		// top: "50%",
		// left: "50%",
		// transform: "translate(-50%, -50%)",
		// pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		// pb: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		// mt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
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
		'[type="text"]': {
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

		'[type="password"]': {
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
		'[type="number"]': {
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

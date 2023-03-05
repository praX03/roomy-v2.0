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
	Input,
	Box,
	Grid,
	Text,
	Heading,
	Button,
	Image,
} from "theme-ui";
import TextFeature from "components/text-feature";
import UserPic from "../assets/team/member-1.png";
import User2Pic from "../assets/team/member-2.png";

export default function User() {
	const router = useRouter();
	const [userData, setUserData] = useState({});
	const callUserPage = async () => {
		try {
			const res = await fetch("/user-dashboard", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			setUserData(data);

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
		callUserPage();
	}, []);
	return (
		<section>
			<Container>
				<Logo src={LogoDark} />
				<Button
					sx={styles.donate__btn}
					variant="secondary"
					aria-label="Get Started"
					onClick={() => router.push("/user-logout")}
					// style={{ pointerEvents: "none" }}
				>
					Log Out
				</Button>

				<Box sx={styles.contentBox} id="user-dashboard">
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							My Dashboard
						</Heading>
						<Text as="p" sx={styles.description}>
							Here is the data you've provided to us
						</Text>
					</Box>
					<Button
						sx={styles.edit__btn}
						variant="secondary"
						aria-label="Edit Profile"
					>
						Edit Profile
					</Button>
					<form method="GET">
						<Box sx={styles.textBox}>
							<Grid sx={styles.grid}>
								<Box sx={styles.card}>
									<Image
										sx={styles.icon}
										src={userData.name === "Pratham Kumar" ? UserPic : User2Pic}
									/>
									<Box sx={styles.wrapper}>
										<Text sx={styles.wrapper.title}>Your Name</Text>
										<Text sx={styles.wrapper.subTitle}>{userData.name}</Text>
										<Text sx={styles.wrapper.title}>Your Phone Number</Text>
										<Text sx={styles.wrapper.subTitle}>{userData.phone}</Text>
										<Text sx={styles.wrapper.title}>Your Email ID</Text>
										<Text sx={styles.wrapper.subTitle}>{userData.email}</Text>
										<Text sx={styles.wrapper.title}>Your College</Text>
										<Text sx={styles.wrapper.subTitle}>{userData.college}</Text>
										<Text sx={styles.wrapper.title}>Your Gender</Text>
										<Text sx={styles.wrapper.subTitle}>Blah 3</Text>
									</Box>
								</Box>
							</Grid>
						</Box>
					</form>
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
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
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
	edit__btn: {
		position: "absolute",
		flexShrink: 0,
		top: "5%",
		right: ["10%"],
		backgroundColor: ["transparent", "white"],
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

		".subscribe__btn": {
			flexShrink: 0,
			margin: "100px",
			mb: "10px",
			backgroundColor: ["text", "primary"],
			mt: [2, 0],
			py: ["15px"],
		},
	},
	coreFeature: {
		py: [0, null, null, 2, null, 7],
		position: "relative",
	},
	containerBox: {
		display: "flex",
		alignItems: ["flex-start", null, null, "center"],
		justifyContent: ["flex-start", null, null, "space-between"],
		flexDirection: ["column", null, null, "row"],
		pb: [0, null, null, null, null, 7],
	},
	thumbnail: {
		mr: ["auto", null, null, 6, 60, 85],
		order: [2, null, null, 0],
		ml: ["auto", null, null, 0],
		display: "inline-flex",
		position: "relative",
		"> img": {
			position: "relative",
			zIndex: 1,
			height: [310, "auto"],
		},
	},
	textBox: {
		width: ["100%", null, null, 315, 390, 450, null, 500],
		flexShrink: 0,
		mb: [7, null, 60, 0],
		textAlign: ["center", null, null, "left"],
	},
	grid: {
		pr: [2, 0, null, null, 6, "70px"],
		pl: [2, 0],
		pt: [2, null, null, null, 3],
		mx: "auto",
		width: ["100%", 370, 420, "100%"],
		gridGap: ["35px 0", null, null, null, "50px 0"],
		gridTemplateColumns: ["repeat(1,1fr)"],
	},
	card: {
		display: "flex",
		alignItems: "center",
		transition: "all 0.3s",
	},
	icon: {
		width: ["85px", null, null, null, "190px"],
		height: "auto",
		flexShrink: 0,
		mr: [3, null, null, null, 4],
		ml: [3, null, null, null, 4],
	},
	wrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		mt: "-5px",
		title: {
			fontSize: 3,
			color: "white",
			lineHeight: 1.2,
			fontWeight: 700,
			mb: [2, null, 3, 2, 3],
		},
		subTitle: {
			fontSize: [1, null, null, "14px", 1],
			fontWeight: 400,
			lineHeight: 1.4,
		},
	},
};

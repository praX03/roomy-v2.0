/** @jsx jsx */
import { useRef, useState, useEffect } from "react";
import { jsx } from "theme-ui";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
import UserPic from "../assets/team/member-1.png";
import User2Pic from "../assets/team/member-2.png";

export default function UserList({ userData, handleAccept, handleDeny }) {
	return (
		<Box sx={styles.contentBox} id="user-dashboard" key={userData._id}>
			<form method="GET">
				<Box sx={styles.textBox}>
					<Box sx={styles.actionBox}>
						<ImCross
							sx={styles.actionBox.iconX}
							onClick={() => {
								handleDeny(userData._id);
							}}
						/>
						<TiTick
							sx={styles.actionBox.iconY}
							onClick={() => {
								handleAccept(userData._id);
							}}
						/>
					</Box>
					<Box sx={styles.card}>
						<Image
							sx={styles.icon}
							// src={userData.name === "Pratham Kumar" ? UserPic : User2Pic}
							src={UserPic}
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
						<Box sx={styles.wrapperDesc}>
							<Text sx={styles.wrapper.title}>Sleep Timings</Text>
							<Text sx={styles.wrapper.subTitle}>{userData.name}</Text>
							<Text sx={styles.wrapper.title}>Smoking/Drinking Habits</Text>
							<Text sx={styles.wrapper.subTitle}>{userData.phone}</Text>
							<Text sx={styles.wrapper.title}>Dietary Preferences</Text>
							<Text sx={styles.wrapper.subTitle}>{userData.email}</Text>
							<Text sx={styles.wrapper.title}>Your College</Text>
							<Text sx={styles.wrapper.subTitle}>{userData.college}</Text>
							<Text sx={styles.wrapper.title}>Your Gender</Text>
							<Text sx={styles.wrapper.subTitle}>Blah 3</Text>
						</Box>
					</Box>
				</Box>
			</form>
		</Box>
	);
}
const styles = {
	majorGrid: {
		pb: ["170px", "15px", "15px", "170px", null, null, "120px", "215px"],
		pt: ["170px", "15px", "15px", "170px", null, null, "170px", "245px"],
	},
	contentBox: {
		backgroundColor: "primary",
		textAlign: "center",
		borderRadius: 20,
		py: ["20px", null, 50],
	},
	edit__btn: {
		position: "relative",
		top: "-20%",
		right: "-40%",
		flexShrink: 0,
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
		// width: ["100%", null, null, 315, 390, 450, null, 500], For adjusting grid gap in text section
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
	actionBox: {
		display: "flex",
		alignItems: "center",
		// justifyContent: "center",
		transition: "all 0.3s",
		ml: [3, null, null, null, 8],
		// mt: [3, null, null, null, null],
		iconX: {
			display: "flex",
			mt: [3, null, null, null, null],
			alignItems: "center",
			justifyContent: "center",
			color: "text",
			fontSize: 24,
			mr: "15px",
			transition: "all 0.25s",
			cursor: "pointer",
			"&:hover": {
				color: "secondary",
			},
		},
		iconY: {
			display: "flex",
			mt: [3, null, null, null, null],
			alignItems: "center",
			justifyContent: "center",
			color: "text",
			fontSize: 40,
			mr: "15px",
			transition: "all 0.25s",
			cursor: "pointer",
			"&:hover": {
				color: "secondary",
			},
		},
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
	wrapperDesc: {
		"@media screen and (max-width:1220px)": {
			display: "none",
		},
		width: ["100%", null, null, 315, 390, 450, null, 500],
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		mt: "-5px",
		ml: "5px",
		title: {
			fontSize: 3,
			color: "white",
			lineHeight: 1,
			fontWeight: 700,
			mb: [null, null, 1, null, 1],
		},
		subTitle: {
			fontSize: [1, null, null, "14px", 1],
			fontWeight: 400,
			lineHeight: 1.4,
		},
	},
};

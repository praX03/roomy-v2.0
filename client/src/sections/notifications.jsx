/** @jsx jsx */
import { useRef, useState, useEffect } from "react";
import { jsx } from "theme-ui";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import UserList from "./user-list";
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

export default function Notifications() {
	// const router = useRouter();
	const userData = [
		{
			_id: "610dbc0ab8a1740015898306",
			name: "test",
			email: "test2@test.com",
			accepted: ["610dbcbeb8a174001589830f", "610dbcbeb8a174001589830g"],
			phone: "92929292929",
			college: "Manipal University",
			date: "2021-08-06T22:47:38.011Z",
			__v: 1,
		},
		{
			_id: "610dbcbeb8a174001589830f",
			name: "Test User",
			email: "test1@gmail.com",
			accepted: ["610dbcbeb8a174001589830f", "610dbcbeb8a174001589830g"],
			phone: "92929292929",
			college: "Manipal University",
			date: "2021-08-06T22:50:38.354Z",
			__v: 1,
		},
	];
	const [allUserData, setAllUserData] = useState([]);
	const callUserPage = async () => {
		try {
			const res = await fetch("/notifs", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				// credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			setAllUserData(data);
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			router.push("/login");
		}
	};
	// const callSetUserData = () => {
	// 	setAllUserData(userData);
	// };
	useEffect(() => {
		callUserPage();
		// callSetUserData();
	}, []);
	const handleAccept = (id) => {
		console.log(id);
		fetch("/accepted", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				followId: id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	const handleDeny = (id) => {
		setAllUserData(allUserData.filter((user) => user._id !== id));
		fetch("/declined", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				followId: id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	const userList = allUserData.map((userData) => {
		return (
			<CSSTransition key={userData} timeout={500} classNames="move">
				<UserList
					userData={userData}
					handleAccept={handleAccept}
					handleDeny={handleDeny}
				/>
			</CSSTransition>
		);
	});
	return (
		<section>
		<Container>
			<Box sx={styles.head}>Notifications</Box>
			<Box sx={styles.title}>Congratulations! These poeple find you as good fit for them!</Box>
		</Container>
			<Container>
				{allUserData.length > 0 ? (
					<TransitionGroup>
						<Grid
							gap={2}
							columns={[1, null, 4, 1, 1, 1, 1, 1]}
							sx={styles.majorGrid}
						>
							{userList}
						</Grid>
					</TransitionGroup>
				) : (
					<Grid
						gap={2}
						columns={[1, null, 4, 1, 1, 1, 1, 1]}
						sx={styles.majorGrid}
					>
						<Box sx={styles.contentBox} id="user-dashboard" key={userData._id}>
							<form method="GET">
								<Box sx={styles.textBox}>
									<Box sx={styles.card}>
										<Box sx={styles.wrapper}>
											<Text sx={styles.end}>Go find some new Roomys!</Text>
										</Box>
									</Box>
								</Box>
							</form>
						</Box>
					</Grid>
				)}
			</Container>
		</section>
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
	end: {
		fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
		color: "white",
		textAlign: "center",
		lineHeight: [1.3, null, null, 1.25],
		fontWeight: "700",
		letterSpacing: ["-.5px", null, "-1.5px"],
		mb: [2, 3],
	},
	title: {
		fontSize: ["20px", null, "24px", null, null, "28px", null, "32px"],
		color: "black",
		textAlign: "center",
		lineHeight: [1.3, null, null, 1.25],
		fontWeight: "700",
		letterSpacing: ["-.5px", null, "-1.5px"],
		mt: [5, 6],
	},
	head: {
		fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
		color: "primary",
		textAlign: "center",
		lineHeight: [1.3, null, null, 1.25],
		fontWeight: "700",
		letterSpacing: ["-.5px", null, "-1.5px"],
		mt: [4, 5]
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

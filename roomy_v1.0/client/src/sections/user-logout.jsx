/** @jsx jsx */
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import { useEffect } from "react";
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Container, Box, Heading } from "theme-ui";

export default function Logout() {
	const router = useRouter();
	useEffect(() => {
		fetch("/logout", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				router.replace("/login");
				if (!res.status === 200) {
					const err = new Error(res.error);
					throw err;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	});
	return (
		<section id="contact">
			<Container>
				<Logo src={LogoDark} />
				<Box sx={styles.contentBox}>
					<Box sx={styles.contentBoxInner}>
						<Heading as="h2" sx={styles.title}>
							User Successfully Logged Out! Redirecting...
						</Heading>
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
	title: {
		color: "#fff",
	},

	contentBoxInner: {
		width: ["100%", null, "540px", "600px"],
		mx: "auto",
		mt: -1,
		px: [3, 5],
	},
};

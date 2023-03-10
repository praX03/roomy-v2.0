/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import BannerImg from "assets/banner-thumb.jpg";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
	const router = useRouter();
	return (
		<section sx={styles.banner} id="home">
			<Container sx={styles.banner.container}>
				<Box sx={styles.banner.contentBox}>
					<Heading as="h1" variant="heroPrimary">
						Choose Roomie, Choose Roomy
					</Heading>
					<Text as="p" variant="heroSecondary">
						O stop solution to all your room mate finding problems.
					</Text>
					<Button
						sx={styles.banner.buttonBox}
						variant="secondary"
						onClick={() => router.push("/register")}
					>
						New User? Register
					</Button>
					<Button
						sx={styles.banner.buttonBox}
						variant="secondary"
						onClick={() => router.push("/login")}
					>
						{/* <Link
							activeClass="active"
							// to="subscribe"
							// spy={true}
							// smooth={true}
							// offset={-70}
							// duration={500}
							
						> */}
						Returning? Log In
						{/* </Link> */}
					</Button>
				</Box>

				<Box sx={styles.banner.imageBox}>
					<Image src={BannerImg} alt="banner" />
				</Box>
			</Container>
		</section>
	);
}

const styles = {
	banner: {
		pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		pb: [2, null, 0, null, 2, 0, null, 5],
		position: "relative",
		zIndex: 2,
		"&::before": {
			position: "absolute",
			content: '""',
			bottom: 6,
			left: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			// backgroundImage: `url(${ShapeLeft})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom left",
			backgroundSize: "36%",
		},
		"&::after": {
			position: "absolute",
			content: '""',
			bottom: "40px",
			right: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			// backgroundImage: `url(${ShapeRight})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom right",
			backgroundSize: "32%",
		},
		container: {
			minHeight: "inherit",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		contentBox: {
			width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
			mx: "auto",
			textAlign: "center",
			mb: ["40px", null, null, null, null, 7],
		},
		buttonBox: {
			mx: "3px",
		},
		imageBox: {
			justifyContent: "center",
			textAlign: "center",
			display: "inline-flex",
			mb: [0, null, -6, null, null, "-40px", null, -3],
			img: {
				position: "relative",
				height: [245, "auto"],
			},
		},
	},
};

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import FeatureThumb from "assets/team.svg";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";

const data = {
	subTitle: "Necessity is the Mother of Invention",
	title: "Who are we? What do we do?",
	description:
		"We are a group of college students who have faced this problem of finding a good roommate when we came to college. It was really difficult for us to find someone to share our rooms with since we did not know anyone from our college at that moment. That is when the idea of Roomy striked to us. College is a lovely place and we believe nobody should be stressed out due to minor problems. We are working hard constantly to launch Roomy with full-fledge as soon as possible.",
};

// const data = [
// 	{
// 		id: 1,
// 		imgSrc: Member1,
// 		altText: "Pratham Kumar",
// 		title: "Pratham Kumar",
// 		designation: "CEO and Founder",
// 		socialProfile: [
// 			{
// 				id: 1,
// 				name: "facebook",
// 				path: "#",
// 				icon: <FaFacebookF />,
// 			},
// 			{
// 				id: 2,
// 				name: "twitter",
// 				path: "#",
// 				icon: <FaTwitter />,
// 			},
// 			{
// 				id: 3,
// 				name: "instagram",
// 				path: "#",
// 				icon: <FaInstagram />,
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		imgSrc: Member2,
// 		altText: "Aditya Agrawal",
// 		title: "Aditya Agrawal",
// 		designation: "Founder",
// 		socialProfile: [
// 			{
// 				id: 1,
// 				name: "facebook",
// 				path: "#",
// 				icon: <FaFacebookF />,
// 			},
// 			{
// 				id: 2,
// 				name: "twitter",
// 				path: "#",
// 				icon: <FaTwitter />,
// 			},
// 			{
// 				id: 3,
// 				name: "instagram",
// 				path: "#",
// 				icon: <FaInstagram />,
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		imgSrc: Member3,
// 		altText: "Ananay Gupta",
// 		title: "Ananay Gupta",
// 		designation: "Web Designer",
// 		socialProfile: [
// 			{
// 				id: 1,
// 				name: "facebook",
// 				path: "#",
// 				icon: <FaFacebookF />,
// 			},
// 			{
// 				id: 2,
// 				name: "twitter",
// 				path: "#",
// 				icon: <FaTwitter />,
// 			},
// 			{
// 				id: 3,
// 				name: "instagram",
// 				path: "#",
// 				icon: <FaInstagram />,
// 			},
// 		],
// 	},
// ];

export default function TeamSection() {
	return (
		<section sx={{ variant: "section.coreFeature" }} id="team">
			<Container sx={styles.containerBox}>
				<Box sx={styles.contentBox}>
					<TextFeature
						subTitle={data.subTitle}
						title={data.title}
						description={data.description}
					/>
				</Box>
				<Box sx={styles.thumbnail}>
					<Image src={FeatureThumb} alt="Thumbnail" />
					<Box sx={styles.shapeBox}>
						{/* <Image src={shapePattern} alt="Shape" /> */}
					</Box>
				</Box>
			</Container>
		</section>
		/* <section>
			<Container>
				<SectionHeader slogan="our team" title="Amateurs set on a voyage" />

				<Grid sx={styles.grid}>
					{data.map((item) => (
						<TeamCard
							key={`team--key${item.id}`}
							src={item.imgSrc}
							altText={item.altText}
							title={item.title}
							designation={item.designation}
							social={item.socialProfile}
						/>
					))}
				</Grid>
			</Container>
		</section> */
	);
}

const styles = {
	// grid: {
	// 	mt: [0, null, -6, null, -4],
	// 	gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
	// 	gridTemplateColumns: [
	// 		"repeat(2,1fr)",
	// 		null,
	// 		"repeat(2,1fr)",
	// 		null,
	// 		"repeat(3,1fr)",
	// 	],
	// },
	containerBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: "20px",
		flexWrap: ["wrap", null, null, "nowrap"],
		pb: [0, 7, 0, null, 7],
	},
	contentBox: {
		flexShrink: 0,
		px: [0, null, "30px", 0],
		textAlign: ["center", null, null, "left"],
		width: ["100%", "80%", null, 340, 400, 430, null, 485],
		pb: ["50px", "60px", null, 0],
		mx: ["auto", null, null, 0],
		".description": {
			pr: [0, null, 6, 7, 6],
		},
	},
	thumbnail: {
		display: "inline-flex",
		position: "relative",
		mr: "auto",
		ml: ["auto", null, null, null, 7],
		"> img": {
			position: "relative",
			zIndex: 1,
			height: [310, "auto"],
		},
	},
	shapeBox: {
		position: "absolute",
		bottom: -65,
		right: -165,
		zIndex: -1,
		display: ["none", "inline-block", "none", null, "inline-block"],
	},
};

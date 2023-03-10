/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
	{
		id: 1,
		imgSrc: Partnership,
		altText: "What does Roomy do?",
		title: "Moved to a New Place?",
		text: "With Roomy, you can find people in your vicinity who are looking for a sharing apartment, flat, house, room, etc.",
	},
	{
		id: 2,
		imgSrc: Performance,
		altText: "Why Roomy?",
		title: "Meet your new Roomy incredibly fast",
		text: "With its sorting process, it finds people you are comfortable with, people with the same habits, hobbies, tastes, etc. ",
	},
	{
		id: 3,
		imgSrc: Subscription,
		altText: "No more adjusting",
		title: "No More Adjusting",
		text: "Match with people you feel are good enough for you. Gone are the days when you had to adjust with your roommate because you did not know them.",
	},
	{
		id: 4,
		imgSrc: Support,
		altText: "Communication is the Key!",
		title: "Communication is the Key!",
		text: "Chat with them, discuss things you want, meet with them beforehand to see if they are the perfect roomy/roommate for you.",
	},
];

export default function KeyFeature() {
	return (
		<section sx={{ variant: "section.keyFeature" }} id="feature">
			<Container>
				<SectionHeader
					slogan="What is Roomy afterall?"
					title="Salient Features"
				/>

				<Grid sx={styles.grid}>
					{data.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={item.imgSrc}
							alt={item.altText}
							title={item.title}
							text={item.text}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		width: ["100%", "80%", "100%"],
		mx: "auto",
		gridGap: [
			"35px 0",
			null,
			"40px 40px",
			"50px 60px",
			"30px",
			"50px 40px",
			"55px 90px",
		],
		gridTemplateColumns: [
			"repeat(1,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(4,1fr)",
		],
	},
};

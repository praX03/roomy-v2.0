/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Chat from "assets/feature/chat.svg";

import Support from "assets/feature/support.svg";

const data = [
	{
		id: 1,
		imgSrc: Chat,
		altText: "City Life",
		title: "",
		text: "You've moved to this new place in a new city and want to get a room. We all know how expensive it could be to take a flat all by yourselves. The solution here is to get a shared house. But, you do not know who you would be living with and would he/she be a good fit for you. With Roomy, you can find your perfect roommate.",
	},
	{
		id: 2,
		imgSrc: Chat,
		altText: "College Life",
		title: "",
		text: "You have been admitted to your dream college and you're moving out. You're excited to experience that dorm life but also scared because you don't know who you would be sharing your dorm with, if they'd match up with your vibe or not. With Roomy, you can match with your roommate before reaching college.",
	},
	{
		id: 3,
		imgSrc: Chat,
		altText: "People Problems",
		title: "",
		text: "Some problems people face while moving to new cities are a) Not able to find someone as hygienic as yourselves. b) Not able to find someone with same tastes. c) Not able to find someone with same life culture as yours. d) Inability to resolve minor conflicts because of differing views/opinions.",
	},
	{
		id: 4,
		imgSrc: Chat,
		altText: "Student Problems",
		title: "",
		text: "Some problems students have been facing are a) Failing to network b) Homesickness c) Anxiety in sharing space with a stranger. d) Unable to maintain a synergy with roommate(s). e) Unwanted disturbance in studies. f) Adjusting to differing lifestyle. g) Not having enough motivation ",
	},
];

export default function Feature() {
	return (
		<section sx={{ variant: "section.feature" }}>
			<Container>
				<SectionHeader
					slogan="Stop Adjusting, Start Living"
					title="Everyday stories"
				/>

				<Grid sx={styles.grid}>
					{data.map((item) => (
						<FeatureCard
							key={item.id}
							src={item.imgSrc}
							alt={item.altText}
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
		pt: [0, null, null, null, null, null, 2],
		px: [5, 6, 0, null, 7, 8, 7],
		gridGap: [
			"40px 0",
			null,
			"45px 30px",
			null,
			"60px 50px",
			"70px 50px",
			null,
			"80px 90px",
		],
		gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
	},
};

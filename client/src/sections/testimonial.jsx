/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";

const data = [
	{
		id: 1,
		title: "Absolute life-saver!!",
		description:
			"I was wasting hours each day looking for places to stay and and being in a new environment I did not want to stay alone. With Roomy, all of these problems were easily taken care of and I can say that I got the best roommate I could imagine.",
		avatar: Avatar1,
		name: "Radhika Sharma",
		designation: "@radhi.2322",
		review: 4,
	},
	{
		id: 2,
		title: "What can I say, except awesome!",
		description:
			"Looking for a place to rent with someone as per your preference and want all top class facilities and proper living conditions? Roomy does all that for you. It uses its sorting mechanism to find the perfect roommate for you and best places to live.",
		avatar: Avatar2,
		name: "John Snow",
		designation: "@john.snow",
		review: 5,
	},
	{
		id: 3,
		title: "Travelling made esaier!",
		description:
			"I travel alot due to my work and I dont like to live alone. With Roomy I can easily find a place to stay as well as an interesting person to live with. It has made my life easier.",
		avatar: Avatar3,
		name: "Aditya Agrawal",
		designation: "@aditya.onthetop",
		review: 5,
	},
	{
		id: 4,
		title: "I am convinced",
		description:
			"Finding a good roommate is really hard for me considering my past experiences. I didnt think I would be able to find someone, but with Roomy I was easily able to find a perfect roommate and it was really easy adjusting to a new life.",
		avatar: Avatar4,
		name: "Richard Hendricks",
		designation: "@richie.rich",
		review: 4,
	},
];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1619 },
		items: 4,
		slidesToSlide: 4, // optional, default to 1.
	},
	laptop: {
		breakpoint: { max: 1619, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 640 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 639, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

export default function TestimonialCard() {
	return (
		<section id="testimonial" sx={{ variant: "section.testimonial" }}>
			<Container css={{ textAlign: "center" }}>
				<SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
			</Container>
			<Box sx={styles.carouselWrapper}>
				<Carousel
					additionalTransfrom={0}
					arrows={false}
					autoPlaySpeed={3000}
					centerMode={false}
					className=""
					containerClass="carousel-container"
					customButtonGroup={<ButtonGroup />}
					dotListClass=""
					draggable
					focusOnSelect={false}
					infinite={true}
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside
					renderDotsOutside={false}
					responsive={responsive}
					showDots={false}
					sliderClass=""
					slidesToSlide={1}
				>
					{data.map((item) => (
						<Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
							<Rating rating={item.review} />
							<Heading as="h3" sx={styles.title}>
								{item.title}
							</Heading>
							<Text sx={styles.description}>{item.description}</Text>
							<div className="card-footer">
								<div className="image">
									<Image src={item.avatar} alt="Client Image" />
								</div>
								<div className="reviewer-info">
									<Heading as="h4" sx={styles.heading}>
										{item.name}
									</Heading>
									<Text sx={styles.designation}>{item.designation}</Text>
								</div>
							</div>
						</Box>
					))}
				</Carousel>
			</Box>
		</section>
	);
}

const styles = {
	carouselWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		flexDirection: "column",
		alignItems: "flex-end",
		mt: "-30px",
		px: "15px",
		".carousel-container": {
			width: "100%",
			maxWidth: [
				"100%",
				null,
				null,
				"750px",
				"1000px",
				"1180px",
				null,
				"calc(50% + 865px)",
			],
			mr: ["auto", null, null, null, null, null, null, "-220px"],
			ml: "auto",
			".react-multi-carousel-item": {
				transition: "all 0.25s",
			},
			".react-multi-carousel-item--active:nth-of-type(4n)": {
				opacity: "0.5",
				"@media screen and (max-width: 1620px)": {
					opacity: 1,
				},
			},
		},
	},
	reviewCard: {
		boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
		transition: "all 0.3s",
		borderRadius: "6px",
		p: [
			"30px 20px 35px",
			"30px 25px 35px",
			"30px 20px 35px",
			"35px 30px 40px 40px",
			"30px 30px 35px",
			"35px 30px 40px 40px",
		],
		bg: "white",
		textAlign: "left",
		m: [
			"28px 5px 30px 5px",
			"28px 20px 30px 20px",
			"28px 15px 30px 15px",
			"28px 15px 30px 15px",
			"30px 20px 40px",
		],
		"&:hover": {
			boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
		},
		".rating": {
			mb: [1, null, null, 2],
			ul: {
				pl: 0,
				listStyle: "none",
				mb: 0,
				display: "flex",
			},
			svg: {
				marginRight: "2px",
				"&:last-of-type": {
					marginRight: 0,
				},
			},
			".star": {
				color: "primary",
				mr: "1px",
			},
			".star-o": {
				color: "#ddd",
				mr: "1px",
			},
		},
		".card-footer": {
			display: "flex",
			alignItems: "center",
			marginTop: [5, null, null, "33px"],
			".image": {
				flexShrink: 0,
				mr: [3, null, null, 4],
				display: "flex",
				img: {
					width: "55px",
					height: "55px",
					borderRadius: "50%",
					objectFit: "cover",
				},
			},
		},
	},
	title: {
		fontSize: [1, 2],
		fontWeight: 700,
		mb: [3, null, null, "22px"],
		color: "text",
		lineHeight: 1.6,
	},
	description: {
		fontSize: [1, null, null, 2],
		fontWeight: "normal",
		color: "text",
		lineHeight: [1.85, null, 2],
	},
	heading: {
		fontSize: [1, null, null, 2],
		fontWeight: 700,
		mb: "3px",
		color: "text",
		lineHeight: 1.3,
	},
	designation: {
		color: "primary",
		fontWeight: "500",
		fontSize: 1,
		lineHeight: 1.4,
	},
};

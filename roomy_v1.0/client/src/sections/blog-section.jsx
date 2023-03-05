/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import PostCard from "components/post-card.js";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import PostThumb1 from "assets/blog/1.jpg";
import PostThumb2 from "assets/blog/2.jpg";
import PostThumb3 from "assets/blog/3.jpg";
import PostThumb4 from "assets/blog/4.jpg";

const data = [
	{
		id: 1,
		imgSrc: PostThumb1,
		altText: "Marketing",
		postLink: "#",
		title: "How to know that he/she is the right roommate for you?",
		authorName: "John",
		date: "July 30, 2021",
	},
	{
		id: 2,
		imgSrc: PostThumb2,
		altText: "Creative",
		postLink: "#",
		title: "How to maintain a good synergy with your roomie?",
		authorName: "Alessia",
		date: "July 30, 2021",
	},
	{
		id: 3,
		imgSrc: PostThumb3,
		altText: "Startup",
		postLink: "#",
		title:
			"5 Things u need to know when you start living with a roommate for the first time.",
		authorName: "Alex",
		date: "July 30, 2021",
	},
	{
		id: 4,
		imgSrc: PostThumb4,
		altText: "Creative",
		postLink: "#",
		title: "Why a good roommate can act as a good psychologist in your life?",
		authorName: "James",
		date: "July 30, 2021",
	},
];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1310 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	laptop: {
		breakpoint: { max: 1310, min: 1024 },
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

export default function BlogSection() {
	return (
		<section sx={{ variant: "section.news" }}>
			<Container>
				<SectionHeader
					slogan="our blogs"
					title="If you have some more reading time"
				/>

				<Box sx={styles.carouselWrapper}>
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						autoPlaySpeed={3000}
						centerMode={false}
						className=""
						containerClass="carousel-container"
						customButtonGroup={<ButtonGroup />}
						dotListClass="test"
						draggable={true}
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
							<PostCard
								key={item.id}
								src={item.imgSrc}
								alt={item.altText}
								postLink={item.postLink}
								title={item.title}
								authorName={item.authorName}
								date={item.date}
							/>
						))}
					</Carousel>
				</Box>
			</Container>
		</section>
	);
}

const styles = {
	carouselWrapper: {
		".carousel-container": {
			mx: -3,
		},
	},
};

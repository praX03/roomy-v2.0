import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import User from "sections/user-dashboard";

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				{/* <Layout> */}
				<SEO title="Roomy" />
				<User />
				{/* </Layout> */}
			</StickyProvider>
		</ThemeProvider>
	);
}

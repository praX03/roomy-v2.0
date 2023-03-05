import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Notifications from "sections/notifications";

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				{/* <Layout> */}
				<SEO title="Roomy" />
				<Notifications />
				{/* </Layout> */}
			</StickyProvider>
		</ThemeProvider>
	);
}

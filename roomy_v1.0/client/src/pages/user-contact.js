import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import UserContact from "sections/user-contact";
import UserLayout from "components/user-layout";

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<SEO title="Roomy" />
				<UserContact />
			</StickyProvider>
		</ThemeProvider>
	);
}

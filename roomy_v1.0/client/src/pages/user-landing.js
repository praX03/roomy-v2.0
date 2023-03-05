import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import UserLayout from "components/user-layout";
import UserBanner from "../sections/user-banner";

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<UserLayout>
					<SEO title="Roomy" />
					<UserBanner />
				</UserLayout>
			</StickyProvider>
		</ThemeProvider>
	);
}

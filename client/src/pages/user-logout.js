import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import UserLayout from "components/user-layout";
import Logout from "../sections/user-logout";

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<UserLayout>
					<SEO title="Roomy" />
					<Logout />
				</UserLayout>
			</StickyProvider>
		</ThemeProvider>
	);
}

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/login": { page: "/login" },
			"/register": { page: "/register" },
			"/user-contact": { page: "/user-contact" },
			"/user-dashboard": { page: "/user-dashboard" },
			"/user-landing": { page: "/user-landing" },
			"/user-logout": { page: "/user-logout" },
			"/user-notifications": { page: "/user-notifications" },
		};
	},
});

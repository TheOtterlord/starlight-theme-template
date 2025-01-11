import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import theme from "starlight-theme-template";

// https://astro.build/config
export default defineConfig({
	site: "https://starlight-theme-theme.netlify.app",
	integrations: [
		starlight({
			title: "Starlight Theme Template",
			favicon: "/favicon.svg",
			social: {
				github: "https://github.com/TheOtterlord/starlight-theme-template",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Install", slug: "guides/install" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			plugins: [theme()],
		}),
	],
});

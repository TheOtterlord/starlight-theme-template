import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-theme-template",
		hooks: {
			setup: ({ config, updateConfig }) => {
				// Update the Starlight config to inject your custom css
				updateConfig({
					customCss: [
						"starlight-theme-template/styles/theme.css",
						...(config.customCss ?? []),
					],
				});
			},
		},
	};
}

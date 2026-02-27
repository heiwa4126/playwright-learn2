import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	webServer: {
		command: "pnpm start",
		url: "http://127.0.0.1:8080",
		reuseExistingServer: !process.env.CI,
	},
	use: {
		baseURL: "http://127.0.0.1:8080",
	},
	//// `pnpm exec playwright show-report` でレポートを表示できるようにするには
	//// 以下をコメントアウト
	// reporter: [["html"]],
});

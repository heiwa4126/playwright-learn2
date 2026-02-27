import { expect, test } from "@playwright/test";

test("title が Example Domain であること", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle("Example Domain");
});

test("h1 が Example Domain であること", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("h1")).toHaveText("Example Domain");
});

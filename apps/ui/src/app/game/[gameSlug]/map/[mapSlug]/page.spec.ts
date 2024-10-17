import { test, expect } from "@playwright/test";

test("map page exist", async ({ page }) => {
  const current = await page.goto("/game/elden-ring/map/the-lands-between");
  await expect(current).toBeTruthy();
});

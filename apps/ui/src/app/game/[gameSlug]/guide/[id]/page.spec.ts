import { test, expect } from "@playwright/test";

test("guide page exist", async ({ page }) => {
  const current = await page.goto("/game/elden-ring/guide/1");
  await expect(current).toBeTruthy();
});

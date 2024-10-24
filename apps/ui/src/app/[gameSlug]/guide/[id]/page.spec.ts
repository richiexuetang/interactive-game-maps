import { test, expect } from "@playwright/test";

test("guide page exist", async ({ page }) => {
  const current = await page.goto("/elden-ring/guide/1");
  await expect(current).toBeTruthy();
});

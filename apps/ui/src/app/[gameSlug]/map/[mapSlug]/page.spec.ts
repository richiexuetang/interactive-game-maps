import { test, expect } from "@playwright/test";

test("elden ring map page exist", async ({ page }) => {
  const current = await page.goto("/elden-ring/map/the-lands-between");
  await expect(current).toBeTruthy();
});

test("black myth wukong map page exist", async ({ page }) => {
  const current = await page.goto("/black-myth-wukong/map/chapter-1");
  await expect(current).toBeTruthy();
});

test("hogwarts legacy map page exist", async ({ page }) => {
  const current = await page.goto("/hogwarts-legacy/map/world");
  await expect(current).toBeTruthy();
});

import { test, expect } from "@playwright/test";

test("has maps and checklist sections", async ({ page }) => {
  await page.goto("/game/elden-ring");
  await expect(page.getByText("ELDEN RING MAPS")).toBeVisible();

  await expect(page.getByText("ELDEN RING CHECKLIST")).toBeVisible();
});

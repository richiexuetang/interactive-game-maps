import { test, expect } from "@playwright/test";

test("has return to / link", async ({ page }) => {
  await page.goto("/");

  const link = page.getByRole("link", { name: "Ritcher Map" });

  await expect(link).toBeVisible();

  await page.click("text=Ritcher Map");
});

test("should navigate to elden ring game page", async ({ page }) => {
  await page.goto("/");

  await page.click("text=Elden Ring");

  await expect(
    page.getByRole("heading", { name: "ELDEN RING MAPS" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "ELDEN RING CHECKLIST" })
  ).toBeVisible();
});

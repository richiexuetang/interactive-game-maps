import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("a")).toContainText("Ritcher Map");
});

// test("should navigate to the game page", async ({ page }) => {
//   // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//   await page.goto("/");
//   // Find an element with the text 'About' and click on it
//   await page.click("text=About");
//   // The new URL should be "/about" (baseURL is used there)
//   await expect(page).toHaveURL("/about");
//   // The new page should contain an h1 with "About"
//   await expect(page.locator("h1")).toContainText("About");
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });

import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`);
  await page.getByLabel("Username or email address").fill("username");
  await page.getByLabel("Password").fill("password");
  await page.getByRole("button", { name: "Sign in" }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("https://github.com/");
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(
    page.getByRole("button", { name: "View profile and more" })
  ).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});

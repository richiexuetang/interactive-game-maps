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

test("should navigate to black myth wukong game page", async ({ page }) => {
  const gameName = "Black Myth: Wukong";
  await page.goto("/");

  await page.click(`text=${gameName}`);

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} MAPS` })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} CHECKLIST` })
  ).toBeVisible();
});

test("should navigate to zelda totk game page", async ({ page }) => {
  const gameName = "Zelda: Tears of the Kingdom";
  await page.goto("/");

  await page.click(`text=${gameName}`);

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} MAPS` })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} CHECKLIST` })
  ).toBeVisible();
});

test("should navigate to hogwarts legacy game page", async ({ page }) => {
  const gameName = "Hogwarts Legacy";
  await page.goto("/");

  await page.click(`text=${gameName}`);

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} MAPS` })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} CHECKLIST` })
  ).toBeVisible();
});

test("should navigate to gow ragnarok game page", async ({ page }) => {
  const gameName = "God of War: Ragnarok";
  await page.goto("/");

  await page.click(`text=${gameName}`);

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} MAPS` })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} CHECKLIST` })
  ).toBeVisible();
});

test("should navigate to witcher 3 game page", async ({ page }) => {
  const gameName = "The Witcher 3: Wild Hunt";
  await page.goto("/");

  await page.click(`text=${gameName}`);

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} MAPS` })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: `${gameName.toUpperCase()} CHECKLIST` })
  ).toBeVisible();
});

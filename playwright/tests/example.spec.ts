import { test, expect } from "@playwright/test";
import { StartPage } from "../src/pages/startPage";
import { NavigateBar } from "../src/pages/navigationBar";
import { DownloadPage } from "../src/pages/downloadPage";

test.describe("Check general page", () => {
  test("Check title text", async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.navigate();
    expect(page.locator("//div[@class=' col1']/h1")).toBeVisible;
  });

  test("Choose Auto-complete", async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.navigate();
    await startPage.clickButton();
    expect(page.locator("shiki homepage twoslash lsp")).toBeVisible;
  });
});

test.describe("Check navigation bar", () => {
  test("Choose docs in navigation bar", async ({ page }) => {
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.clickButtonBar();
    expect(page.locator("//div[@class='main-content-block headline']/h1"))
      .toContainText;
  });

  test("Search words 'tutorials'", async ({ page }) => {
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.searchText();
    expect(page.locator("//div[@role='article']")).toContainText;
  });
});

test.describe("Click to link, page Download", () => {
  test("Click to link 'package on the npm registry'", async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.navigate();
    await downloadPage.nextPage();
    expect(page.locator("//h1[@class='heading-element']")).toBe;
  });
});

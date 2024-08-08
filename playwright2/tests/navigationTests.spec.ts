import { test, Page, expect } from "@playwright/test";
import { NavigateBar } from "../src/elements/navigationBar";
import { PageFactory } from "../src/pages/pageFactory";
import { Pages } from "../src/consts/common.const";

test.describe("Check navigation bar", () => {
  let navigationBar: NavigateBar;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    navigationBar = PageFactory.getPage(page, Pages.NavigateBar) as NavigateBar;
  });

  test.afterAll(async () => {
    await navigationBar.closePage();
  });

  test("Choose docs in navigation bar", async ({ page }) => {
    await navigationBar.navigate();
    await navigationBar.clickButtonDocs();
    expect(page.locator("//div[@class='main-content-block headline']/h1"))
      .toContainText;
  });

  test("Choose download in navigation bar", async () => {
    await navigationBar.navigate();
    await navigationBar.clickButtonDownload();
    await navigationBar.pageDownload();
    expect(
      page.locator("//div[@class='raised main-content-block']/h1")
    ).toContainText("Download TypeScript");
  });

  test("Choose handbook in navigation bar", async () => {
    await navigationBar.navigate();
    await navigationBar.clickButtonHandbook();
    await navigationBar.pageHandbook();
    expect(page.locator("//div/h1")).toContainText("The TypeScript Handbook");
  });
  test("Search words 'tutorials'", async ({ page }) => {
    await navigationBar.navigate();
    await navigationBar.searchText();
    await navigationBar.getResult();
    expect(page.locator("//span[@class='ds-dropdown-menu ds-with-5']")).toBe;
  });
});

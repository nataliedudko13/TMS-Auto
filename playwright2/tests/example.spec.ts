import { Pages } from "../src/consts/common.const";
import { test, Page, expect } from "@playwright/test";
import { StartPage } from "../src/pages/startPage";
import { PageFactory } from "../src/pages/pageFactory";

test.describe("Check general page", () => {
  let startPage: StartPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Check title text", async ({ page }) => {
    await startPage.navigate();
    expect(page.locator("//div[@class=' col1']/h1")).toBeVisible;
  });

  test("Choose Auto-complete", async ({ page }) => {
    await startPage.navigate();
    await startPage.clickButton();
    expect(page.locator("shiki homepage twoslash lsp")).toBeVisible;
  });
});

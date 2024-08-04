import { test, expect, Page } from "@playwright/test";
import { StartPage } from "../src/pages/startPage";
import { NavigateBar } from "../src/pages/navigationBar";
import { DownloadPage } from "../src/pages/downloadPage";
import { PageFactory } from "../src/pages/pageFactory";
import { Pages } from "../src/consts/common.const";

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
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.clickButtonDocs();
    expect(page.locator("//div[@class='main-content-block headline']/h1"))
      .toContainText;
  });

  test("Choose download in navigation bar", async () => {
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.clickButtonDownload();
    await navigationBar.pageDownload();
    expect(
      page.locator("//div[@class='raised main-content-block']/h1")
    ).toContainText("Download TypeScript");
  });

  test("Choose handbook in navigation bar", async () => {
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.clickButtonHandbook();
    await navigationBar.pageHandbook();
    expect(page.locator("//div/h1")).toContainText("The TypeScript Handbook");
  });
  test.skip("Search words 'tutorials'", async ({ page }) => {
    const navigationBar = new NavigateBar(page);
    await navigationBar.navigate();
    await navigationBar.searchText();
    await navigationBar.getResult();
    expect(page.locator("//span[@class='ds-dropdown-menu ds-with-5']")).toBe; //*[@id="option-58243925"]/a/div[1]/span
  });
});

test.describe("Click to link, page Download", () => {
  let downloadPage: DownloadPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    downloadPage = PageFactory.getPage(
      page,
      Pages.DownloadPage
    ) as DownloadPage;
  });

  test.afterAll(async () => {
    await downloadPage.closePage();
  });

  test("Click to link 'package on the npm registry'", async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.navigate();
    await downloadPage.nextPage();
    expect(page.locator("//h1[@class='heading-element']")).toBe;
  });
});

test.describe("Customize site color", () => {
  let startPage: DownloadPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as DownloadPage;
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Choose dark color in the site", async ({ page }) => {
    const startPage = new DownloadPage(page);
    await startPage.navigate();
    await startPage.clickSiteColours();
    await startPage.clickDark();
  });
});

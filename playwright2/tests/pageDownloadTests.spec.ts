import test, { Page, expect } from "@playwright/test";
import { DownloadPage } from "../src/pages/downloadPage";
import { PageFactory } from "../src/pages/pageFactory";
import { Pages } from "../src/consts/common.const";

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
    await downloadPage.navigate();
    await downloadPage.nextPage();
    expect(page.locator("//h1[@class='heading-element']")).toBe;
  });
});

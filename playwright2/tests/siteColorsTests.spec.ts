import test, { Page, expect } from "@playwright/test";
import { DownloadPage } from "../src/pages/downloadPage";
import { PageFactory } from "../src/pages/pageFactory";
import { Pages } from "../src/consts/common.const";

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
      await startPage.navigate();
      await startPage.clickSiteColours();
      await startPage.clickDark();
      expect(page.locator("//*[@id='customize']/article/label[1]/div/select/option[3]")).toBeVisible
    });
  });
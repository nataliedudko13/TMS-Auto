import { Page } from "@playwright/test";
import { DOWNLOAD_URL, TS_URL } from "../consts/common.const";

export class DownloadPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(DOWNLOAD_URL);
  }

  async nextPage() {
    await this.page.goto(TS_URL);
  }

  public get searchLink() {
    return this.page.locator(
      "//a[@href='https://www.npmjs.com/package/typescript']"
    );
  }

  async clicktoLink() {
    await this.searchLink.click();
  }

  public get chooseSiteColours() {
    return this.page.locator("//select[@name='colours']");
  }
  async clickSiteColours() {
    await this.chooseSiteColours.click();
  }
  
  public get chooseColours() {
    return this.page.locator(
      "//*[@id='customize']/article/label[1]/div/select/option[3]"
    );
  }
  async clickDark() {
    await this.chooseColours.click();
  }

  public async closePage() {
    return await this.page.close();
  }
}

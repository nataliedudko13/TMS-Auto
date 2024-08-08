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

  public chooseSiteColours() {
    return this.page.locator("//select[@name='colours']").click();
  }
  async clickSiteColours() {
    this.chooseSiteColours;
  }
  
  public chooseColours() {
    return this.page.locator(
      "//*[@id='customize']/article/label[1]/div/select/option[3]"
    ).click();
  }
  async clickDark() {
    this.chooseColours;
  }

  public async closePage() {
    return await this.page.close();
  }
}
import { Page } from "@playwright/test";

export class DownloadPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto("https://www.typescriptlang.org/download/");
  }
  async nextPage() {
    await this.page.goto("https://www.npmjs.com/package/typescript");
  }
  public get searchLink() {
    return this.page.locator(
      "//a[@href='https://www.npmjs.com/package/typescript']"
    );
  }
  async clicktoLink() {
    await this.searchLink.click();
  }
}

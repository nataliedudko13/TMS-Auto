import { Page } from "@playwright/test";

export class StartPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto("https://www.typescriptlang.org/");
  }
  public get titleText() {
    return this.page.locator("//div[@class=' col1']/h1");
  }
  public get titleTable() {
    return this.page.locator("#tabId2");
  }
  async clickButton() {
    await this.titleTable.click();
  }
}

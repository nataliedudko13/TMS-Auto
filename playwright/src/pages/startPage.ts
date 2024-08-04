import { Page } from "@playwright/test";
import { BASE_URL } from "../consts/common.const";

export class StartPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto(BASE_URL);
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


  public async closePage() {
    return await this.page.close();
  }
}

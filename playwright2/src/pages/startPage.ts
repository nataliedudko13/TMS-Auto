import { Page } from "@playwright/test";
import { BASE_URL } from "../consts/common.const";
import { BasePage } from "./basePage";

export class StartPage extends BasePage {
  public page: Page;
  constructor(page: Page) {
    super(page);
    this.url = "https://www.typescriptlang.org/";
  }

  public  getTitleText() {
    return this.page.locator("//div[@class=' col1']/h1");
  }
  public get titleTable() {
    return this.page.locator("#tabId2");
  }
  async clickButton() {
    await this.titleTable.click();
  }

}
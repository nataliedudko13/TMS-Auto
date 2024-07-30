import { Page } from "@playwright/test";

export class NavigateBar {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto("https://www.typescriptlang.org/");
  }
  public get navigation() {
    return this.page.locator(
      "//a[@href = '/docs/']/*[text()[contains(.,'Docs')]]"
    );
  }
  async clickButtonBar() {
    await this.navigation.click();
  }
  public get search() {
    return this.page.locator("#search-box-top");
  }
  async searchText() {
    await this.search.fill("tutorials");
  }
}

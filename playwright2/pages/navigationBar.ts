import { Page } from "@playwright/test";
import { BASE_URL, DOWNLOAD_URL, HANDBOOK_URL } from "../src/consts/common.const";

export class NavigateBar {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(BASE_URL);
  }

  public get navigationDocs() {
    return this.page.locator(
      "//a[@href = '/docs/']/*[text()[contains(.,'Docs')]]"
    );
  }
  async clickButtonDocs() {
    await this.navigationDocs.click();
  }

  public get navigationDownload() {
    return this.page.locator("#tab1")
  }
  async clickButtonDownload() {
    await this.navigationDownload.click()
  }
  async pageDownload(){
    await this.page.goto(DOWNLOAD_URL);
  }

  public get navigationHandbook() {
    return this.page.locator("#tab3")
  }
  async clickButtonHandbook() {
    await this.navigationHandbook.click()
    }
    async pageHandbook(){
await this.page.goto(HANDBOOK_URL)
    }
    
  public get search() {
    return this.page.locator("#search-box-top");
  }
  async searchText() {
    await this.search.fill("tutorials"); 
  }
  public get resultSearch() {
    return this.page.locator("//span[@class='ds-dropdown-menu ds-with-5']")
  }
async getResult(){
     await this.getResult()
}

  public async closePage(){
    return await this.page.close();
}
}

//div[@class='algolia-docsearch-suggestion--subcategory-inline'][text()[contains(.,'Migrating from JavaScript')]]
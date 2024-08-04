import { Page } from "@playwright/test";
import { HANDBOOK_URL } from "../consts/common.const";

export class HandbookPage {
    public page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    
    async navigate() {
      await this.page.goto(HANDBOOK_URL);
    }
}
    
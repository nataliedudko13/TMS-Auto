import { Page } from "@playwright/test";
import { NavigateBar } from "../elements/navigationBar";
import { BASE_URL } from "../consts/common.const";

export class BasePage{
    protected url!:string

    public navigationBar:NavigateBar

    constructor(protected page:Page){
        this.navigationBar = new NavigateBar(page)
    }

    public async navigate() {
        await this.page.goto(BASE_URL);
      }

    public async closePage(){
        return await this.page.close();
    }

    // public async getPageTitle()
    // {
    //     return this.page.title();
    // }
}
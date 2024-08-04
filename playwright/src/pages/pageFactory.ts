import { Page } from "@playwright/test";
import { StartPage } from "./startPage";
import { NavigateBar } from "./navigationBar";
import { Pages } from "../consts/common.const";
import { DownloadPage } from "./downloadPage";
import { HandbookPage } from "./handbookPage";


export class PageFactory{
    static getPage(page:Page,pageName:Pages)
    {
        switch(pageName)
        {
            case(Pages.StartPage):
            return new StartPage(page)

            case(Pages.NavigateBar):
            return new NavigateBar(page)

            case(Pages.DownloadPage):
            return new DownloadPage(page)

            case(Pages.HandbookPage):
            return new HandbookPage(page)
        }
    }
}
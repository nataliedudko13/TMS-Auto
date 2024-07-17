import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";

describe("Frontend tests", () => {
  let driver: WebDriver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });
  afterAll(async () => {
    await driver.quit();
  });
  it("Searh product in catalog", async () => {
    await driver.get("https://www.onliner.by/");
    const element: any = await driver.findElement(
      By.xpath("//input[@class='fast-search__input']")
    );
    await driver.actions().sendKeys(element, "телефон").perform();
    //const item = await driver.findElement(By.xpath("//a[@class='button button_orange product__button' and @href='https://catalog.onliner.by/mobile/nokia/nokia2154gblk/prices']"))
    //await driver.actions().move({origin:item}).press().perform()
    await driver.sleep(6000);
    expect(element.isEnabled()).toBeTruthy();
  },16000);
});

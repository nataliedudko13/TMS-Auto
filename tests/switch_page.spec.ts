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
  it("Switch to catalog page", async () => {
    await driver.get("https://www.onliner.by/");
    let element = await driver.findElement(
        By.xpath("//div[@class='g-top-i']//span[contains(text(),'Каталог')]"));
    driver.actions().move({ origin: element }).press().perform();
    await driver.sleep(3000);
    expect(element.isEnabled()).toBeTruthy();
  }, 16000);
});

import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";

describe("Find some element", () => {
  let driver: WebDriver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });
  afterAll(async () => {
    await driver.quit();
  });
  it("Find button НАШИ СОЦСЕТИ", async () => {
    await driver.get("https://www.onliner.by/");
    let element = await driver.findElement(
      By.xpath("//*[text()[contains(.,'Наши соцсети')]]")
    );
    const textOfElement = await element.getText();
    expect(textOfElement).toBe("НАШИ СОЦСЕТИ");
    expect(element.isDisplayed()).toBeTruthy();
  }, 16000);
});

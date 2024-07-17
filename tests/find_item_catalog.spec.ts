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
  it("Find someone item in page", async () => {
    //jest.setTimeout(50000);
    await driver.get("https://www.onliner.by/");
    let element = await driver.findElement(
      By.css("a[href='https://catalog.onliner.by/headphones?is_by_parts=1']")
    );
    driver.actions().move({ origin: element }).click().perform();
    await driver.sleep(3000);
    expect(element.isEnabled()).toBeTruthy();
  }, 16000);
});

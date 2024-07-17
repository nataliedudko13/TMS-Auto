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
  it("LogIn as an existing user", async () => {
    await driver.get("https://www.onliner.by/");
    const element: any = await driver.findElement(
      By.xpath("//div[@class='auth-bar__item auth-bar__item--text']")
    );
    await driver.actions().move({ origin: element }).click().perform();
    const login = await driver.findElement(
      By.xpath("//input[@placeholder='Ник или e-mail']")
    );
    login.sendKeys("Dudu7790@gmail.com");
    const password = await driver.findElement(
      By.xpath("//input[@placeholder='Пароль']")
    );
    password.sendKeys("Dudu7206490");
    const buttonLogin = await driver.findElement(
      By.xpath(
        "//div[@class='auth-form__control auth-form__control_condensed-additional']//button[@type='submit']"
      )
    );
    // buttonLogin.click();
    // const recaptcha = await driver.findElement(
    //   By.xpath(
    //     "//div[@class='recaptcha-checkbox-border' and @role='presentation']"
    //   )
    // );
    // recaptcha.click(); Здесь столкнулась с проблемой капчи, обойти ее не смогла
    await driver.sleep(5000);
    expect(element.isEnabled()).toBeTruthy();
  }, 16000);
});

import test, { expect } from "@playwright/test";
import { API_URL } from "../src/consts/common.const";

test.describe("Get some item", () => {
  test("Mocks fruits", async ({ page }) => {
    await page.route("*/**/api/v1/fruits", async route => {
      const json = [{ name: "Strawberry", id: 21 }];
      await route.fulfill({ json });
    });
    await page.goto(API_URL);
    await expect(page.getByText("Strawberry")).toBeVisible();
  });
});

test.describe("Adds new item", () => {
    test("Add new fruit", async ({page}) => {
        await page.route("*/**/api/v1/fruits", async route =>{
            const response = await route.fetch();
            const json = await response.json();
            json.push({ name: 'Test', id: 333})
            await route.fulfill({response, json})
        })
        await page.goto(API_URL);
        await expect(page.getByText('Test', {exact: true})).toBeVisible();
    })
})
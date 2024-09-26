import { test, expect, Page } from '@playwright/test';

test.describe("Main Test", () => {
  let page: Page

  test.describe.configure(({mode: 'serial'}))

  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
  })

  test('Login', async ({  }) => {
    // Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  });

  test('Add to cart', async ({  }) => {
    // Add to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible();
  });

  test('Check out', async ({  }) => {
    // Check out
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Test');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('1244');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
  });
})

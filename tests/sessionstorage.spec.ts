import { test, expect, BrowserContext, Page } from '@playwright/test';


test.use({ storageState: './saucelabs.json' });
test('launch sauce demo pagea without login', async ({ page }) => {


    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(2000);

    await page.goto('https://www.saucedemo.com/inventory-item.html?id=4');
    await page.waitForTimeout(2000);

    await page.goto('https://www.saucedemo.com/inventory-item.html?id=3');
    await page.waitForTimeout(2000);

    await page.goto('https://www.saucedemo.com/inventory-item.html?id=2');
    await page.waitForTimeout(2000);

    expect(page.locator('.inventory_details_name large_size')).toHaveText('Sauce Labs Onesie');



})
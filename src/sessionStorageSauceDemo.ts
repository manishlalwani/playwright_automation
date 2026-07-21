

//IIFE

import { chromium, expect } from "@playwright/test";


(async () => {
    let browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    expect(await page.title()).toBe('Swag Labs');//assertion

    await page.context().storageState({ path: 'saucelabs.json' })


})();
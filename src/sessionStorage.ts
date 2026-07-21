

//IIFE

import { chromium, expect } from "@playwright/test";


(async () => {
    let browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    await page.locator('#input-email').fill('jacobbetthel@test.com');
    await page.locator('#input-password').fill('test123');
    await page.locator('//input[@value="Login"]').click();

    expect(await page.title()).toBe('My Account');//assertion

    await page.context().storageState({ path: 'opercartstate.json' })


})();
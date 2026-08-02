import { test, expect } from '@playwright/test';

test('verify all footer links testcase', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allFooterLinks = await page.locator('//footer//a').all();
    console.log(allFooterLinks.length);

    for(let link of allFooterLinks){ 
        await link.click();
        console.log(await page.title());
        await page.goBack();
       
    }
})
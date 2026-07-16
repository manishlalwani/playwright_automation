import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Multi User Test', async ({ browser }) => {
    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();
    let ctx3: BrowserContext = await browser.newContext();

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();
    let page3: Page = await ctx3.newPage();

    const appUrl = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
    const myAccountLabel = 'h2:has-text("My Account")';

    await page1.goto(appUrl);
    loginFunction(page1, 'jacobbetthel@test.com', 'test123');
    let actualText1 = await page1.locator(myAccountLabel).textContent();
    expect(actualText1, 'My Account');

    await page2.goto(appUrl);
    loginFunction(page2, 'jaspitbum@test.com', 'bum123');
    let actualText2 = await page2.locator(myAccountLabel).textContent();
    expect(actualText2, 'My Account');


    await page3.goto(appUrl);
    loginFunction(page3, 'gurnoorbrar@test.com', 'brar123');
    let actualText3 = await page3.locator(myAccountLabel).textContent();
    expect(actualText3, 'My Account');


});

async function loginFunction(pageObj: Page, username: string, password: string) {
    await pageObj.locator('#input-email').fill(username);
    await pageObj.locator('#input-password').fill(password);
    await pageObj.locator('input.btn.btn-primary').click();
}
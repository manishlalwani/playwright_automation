import { test, expect, Locator } from '@playwright/test';

test('get all links test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    let allLinks: Locator[] = await page.locator('a[href]').all();
    console.log('all links are : ', allLinks.length);

    let totalLinks: number = await page.locator('a[href]').count();
    console.log('total links are : ', totalLinks);


    let linksCount = await page.getByRole('link').count();
    console.log('total links using role are : ', linksCount);


})

test('fetch all links text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    let allLinks: Locator[] = await page.locator('a[href]').all();
    console.log('all links are : ', allLinks.length);

    for (let ele of allLinks) {
        let text = await ele.textContent();
        let href = await ele.getAttribute('href');
        console.log(text, " : ", href);
    }

})


test('fetch all image test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    let allLinks: Locator[] = await page.locator('img').all();
    console.log('all links are : ', allLinks.length);

    for (let ele of allLinks) {
        let alt = await ele.getAttribute('alt');
        console.log(alt);
    }

})


test('iterate all links and break on specific link test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allLinks: Locator[] = await page.locator('.list-group-item').all(); //all Right table links
    console.log('all links are : ', allLinks.length);

    for (let ele of allLinks) {
        let linkText = await ele.textContent();
        console.log(linkText);
        page.waitForTimeout(1000);
        if (linkText === 'Recurring payments') {
            await ele.click();
            break;
        }
    }
    await page.pause();

})

test('iterate all links text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allLinks: string[] = await page.locator('.list-group-item').allInnerTexts(); //all Right table links
    console.log('all links are : ', allLinks.length);

    for (let ele of allLinks) {
        console.log(ele);
    }
    await page.pause();

})

test('get all headers text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', { name: 'E-mail' }).fill('jacobbetthel@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(1000);

    let headers = await page.getByRole('heading', { level: 2 }).allInnerTexts();
    for (let header of headers) {
        console.log(header);
    }
    await page.pause();

})
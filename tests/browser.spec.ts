
import { Browser, chromium, firefox, Page, test, webkit } from '@playwright/test'

test('title test', async ({ page }) => {
    await page.goto("https://www.google.com");
    let title = await page.title();
    console.log(title);
    let UrlName = page.url();
    console.log('app URL:', UrlName);
});

test('Multile Browser test', async () => {
    let browser: Browser = await chromium.launch({ headless: false });
    //let browser: Browser = await chromium.launch({ headless: false , channel: 'chrome'});
    //let browser: Browser = await chromium.launch({ headless: false, executablePath:'/Applications/Opera.app/Contents/MacOS/Opera' });
    //let browser: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    //let browser = await firefox.launch({ headless: false })
    //let browser: Browser = await webkit.launch({ headless: false });
    //let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' });

    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    let title = await page.title();
    let UrlName = page.url();
    //console.log('app URL:', UrlName);
    //await page.waitForTimeout(20000);
});
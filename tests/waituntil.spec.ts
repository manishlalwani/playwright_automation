import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Back and Forward Test', async ({ page }) => {


    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', { waitUntil: "load" });
    //dom - DOM is loaded, css/images/js/apis/resurces are loaded and visible  on the page and page is ready now

    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', { waitUntil: "networkidle" });
    //network idle- in the last 500 ms all the api network calls are  settled or completed

    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', { waitUntil: "domcontentloaded" });
    //elements are loaded in dom  of the page but there is no guarantee that they are visible on page

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', { waitUntil: "commit" });
    //commit - element is there in the dom on the page some css or images are still pending to be visible on page




})
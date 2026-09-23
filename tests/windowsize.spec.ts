import { test, expect } from '@playwright/test';

// test.use({
//     viewport : {width: 440 , height: 956}
// });

test('set view port size test case', async ({ page }) => {

    //page.setViewportSize({width : 440, height : 956}); // iphone pro max - responsive testing

    page.setViewportSize({width : 1600, height : 956});

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    console.log('......End......');

});

test('set view port size my test case', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    console.log('......End......');

});
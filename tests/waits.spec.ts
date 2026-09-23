//1. Auto waiting process : 
//Actions : click, fill, check , hover -> Automatically wait for the elemeent
// Actionability check - 
//  a. Attached to the DOM
//  b. Visible on the page
//  c. Stable - not animating
//  d. Enabled
//  e. All the events are also completed


import { test, expect } from '@playwright/test';



test('expect assertion 2 testcase', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //await page.getByRole('button',{name : 'continue'}).click();

    //expicit wait with dynamic wait
    //1. expect wait (web assertions wait) : default time : 5000ms

    //await expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    //2. wait for url : 

    await page.waitForURL(/route=account\/register/);

    //3.  wait for URL : dialog, filechooser, download, multiple window, 

    //4. static wait : pause for 5 secs : 
    //await page.waitForTimeout(10000); // not a good practice

    //5 . Explicitly wait for the element : 
    // 5.1 waitForSelectr() --> legacey wait --- Discouraged by Playwright - v 1.9
    // this wont work for the getBy* methods
    // this will work only with css/xpath/text
    // state 2 - attached, visible
    //await (await page.waitForSelector('#input-firstname1', { state: 'visible', timeout: 5000 })).fill('manish');
    //5.2 : waitFor() - 1.16
    // state 4 - attached, detached, visible, hidden
    // await page.locator('#input-firstname1').waitFor({ state: 'visible', timeout: 5000 });
    // await page.locator('#input-firstname1').fill('manish');
    //await page.getByRole('textbox', {name :'* Last Name'}).waitFor({state:'visible', timeout : 5000});
    //await page.getByRole('textbox', {name :'* Last Name'}).fill('lalwani');
    await page.locator('#input-firstname1').fill('manish');

    console.log('Test case ends');


});
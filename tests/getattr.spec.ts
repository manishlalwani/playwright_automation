import { test, expect, Locator } from '@playwright/test';

test('get all links test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstNamePlaceHolder = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('placeholder');
    console.log(firstNamePlaceHolder);


    let hrefValue = await page.getByRole('link', { name: 'Forgotten Password' }).getAttribute('href');
    console.log(hrefValue);

    console.log('------------');


    let placeHolder = page.getByRole('textbox', { name: 'First Name' });
    await placeHolder.fill('manishlalwani');
    let inputText = await placeHolder.inputValue();
    console.log(inputText);

    await page.pause();


})
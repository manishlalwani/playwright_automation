import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Shadow dom level 1 element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('button', { name: 'Click Me' }).click();

    await page.pause();

});

test('Shadow dom level 2 element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('textbox', { name: 'username' }).fill('Manish Lalwani');

    await page.getByRole('textbox', { name: 'email' }).fill('testmanish@email.com');

    await page.getByRole('textbox', { name: 'bio' }).fill('I am entering bio details');

    await page.getByRole('button', { name: 'submit' }).click();

    await page.pause();

});

test('Shadow dom level 3 element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.locator('outer-shadow-element')
        .locator('inner-shadow-element')
        .getByRole('textbox')
        .fill('This is level 2 shadow dom elememt');


    await page.pause();

});


test('Shadow dom level 4 element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.locator('#deep-btn').click();


    await page.pause();

});


test('Shadow dom level 5 element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('button', { name: 'Slotted Button' }).click();

    await page.pause();

});


test('Shadow dom level 6 element Checkbox test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');



    await page.locator('.add-row').getByRole('textbox').fill('Display Results in Report');

    await page.getByRole('button', { name: 'add' }).click();

    let allCheckBox = await page.locator('li.todo-item').all();

    for (let chck of allCheckBox) {
        let text = await chck.allInnerTexts();
        console.log(text);
        await chck.getByRole('checkbox').click();
    }

    let text = await page.locator('.counter').innerText();

    console.log(text);



    await page.pause();

});



test('Shadow dom level 7 element Combobox test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('combobox').selectOption('playwright');


    await page.getByRole('combobox').selectOption('cypress');


    await page.pause();

});
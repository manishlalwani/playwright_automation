import { test, expect } from '@playwright/test';

test('select dropdown practice', async ({ page }) => {
    await page.goto('https://orangehrm.com/contact-sales');

    let selectValue: string[] = await page.getByRole('combobox', { name: 'Country' }).selectOption('India');//direct dropdown value
    //Role: Combobox
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Angola' }); //visible text
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Belgium' });//value attribute
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 16 });//using index
    console.log(selectValue);
    await page.waitForTimeout(2000);

    let value = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log(value);

    await page.pause();

})


test('multiple select dropdown practice', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    let selectValue: string[] = await page.locator('[name="Month"]').selectOption(["January", "March", "July", "December"]);
    //Role : listbox
    //Multiple attribute is present for the select tag
    console.log(selectValue);


    // await page.locator('[name="Month"]').selectOption(["January","March","July","December"]);
    // let value = await page.locator('[name="Month"]').inputValue();
    // console.log(value);

    await page.waitForTimeout(2000);


    await page.pause();

})
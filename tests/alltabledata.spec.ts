import { test, expect } from '@playwright/test';

test('print all table data for qavbox in separate line', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let headersName = await page.locator('#table02').locator('.th-sm').all();
    for (let header of headersName) {
        let text = await header.innerText();
        console.log(text);
    }

    console.log('Now Printing Data Row Wise');

    let rowData = await page.locator('#table02').locator('td').all();
    //let rowData = await page.locator('#table02 tr').all();

    for (let row of rowData) {
        let text = await row.innerText();
        console.log(text);
    }


})


test('print all table data for qavbox as each row displayed on ui', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    console.log('Now Printing Data Row Wise');

    let rowData = await page.locator('#table02 tr').all();

    for (let row of rowData) {
        let text = await row.innerText();
        console.log(text);
    }


})


test('homework - select dropdown without links all links amazon', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('macbook neo');

    let searchItem = 'macbook neo accessories';
    let allOptions = await page.locator('div.left-pane-results-container').getByRole('button').all();

    for (let opt of allOptions) {
        let text = await opt.innerText();
        if (text === searchItem)
            await opt.click();
    }

})
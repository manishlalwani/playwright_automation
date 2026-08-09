import { test, expect, Locator, Page } from '@playwright/test';

test('select dropdown without links all links test', async ({ page }) => {
    await page.goto('https://www.google.com');

    await page.getByRole('combobox', { name: 'Search' }).fill('naveen automation lab');

    await page.getByText('naveen automation labs course').click();

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
import { test, expect, Locator, Page } from '@playwright/test';

test('select dropdown without links all links test', async ({ page }) => {
    await page.goto('https://www.google.com');

    await page.getByRole('combobox', { name: 'Search' }).fill('naveen automation lab');

    await page.getByText('naveen automation labs course').click();

})

import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Fill value with delay test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: '* First Name' }).pressSequentially('Manish Kumar Lalwani', { delay: 500 });

    await page.pause();

});
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('test', async ({ page }) => {
//   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
//   await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('button', { name: 'Login' }).click();
//   //await page.getByText('Warning: No match for E-Mail').click();
//   await page.locator('#content').getByRole('link', { name: 'Forgotten Password' }).click();
//   await page.getByRole('textbox', { name: '* E-Mail Address' }).click();
// });

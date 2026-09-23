import { test, expect, BrowserContext, Page } from '@playwright/test';

test('iframe element test', async ({ page }) => {

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    //Iframe DOM will be loaded

    let iframeLocator = page.frameLocator('#frame-one748593425');
    let frameLocator = page.frameLocator('iframe[id*="payment-frame"]');

    //let frameLocator1  = await page.frameLocator.

    await frameLocator.getByRole('button', { name: 'Submit', level: 3 }).click();



    await iframeLocator.getByRole('textbox', { name: 'Proposal title' }).fill('Automtion Testing');

    await iframeLocator.getByRole('textbox', { name: 'Location' }).fill('Pune');

    let header = await page.getByRole('heading', { name: 'Vehicle Registration Form', level: 3 }).innerText();

    console.log(header);

    await page.pause();

});

test('frame element test', async ({ page }) => {

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let header = await page.frameLocator('[name="main"]').getByRole('heading', { level: 2 }).innerText();

    console.log(header);

    let footer = await page.frameLocator('[name="bot"]').getByRole('heading', { level: 2 }).innerText();

    console.log(footer);

    await page.pause();

});
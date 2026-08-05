import { test, expect } from '@playwright/test';

test('locator chain practice', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


    await page.
        locator('form')
        .getByRole('textbox', { name: 'First Name' }).fill('manish');

    await page.
        locator('#column-right')
        .getByRole('link', { name: 'Forgotten Password' })
        .click();
})


//td[text()='GUI']/following-sibling::td/input[@value='Delete']

//locator('#table01').locator('tr').filter({hasText:'GUI'}).getByRole('checkbox')

test('webtable chain practice', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');


    await page.
        locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('checkbox')
        .click();

    await page.waitForTimeout(2000);

    await page.
        locator('#table01')
        .locator('tr')
        .filter({ hasText: 'GUI' })
        .getByRole('button', { name: 'Delete' })
        .click();

    

    let officeAddress = await page.
        locator('#table02')
        .locator('tr')
        .filter({ hasText: 'Ashton Cox' })
        .locator('td').nth(2).innerText();

    console.log(officeAddress);

    let colCount = await page.locator('#table02 tr th').count();
    console.log(colCount);

    let rowCount = await page.locator('#table02 tr').count()-1;
    console.log(rowCount);

    await page.pause();
})


//locator('table.ci-scorecard-table').locator('tr').filter({hasText:'Brandon King'}).first().locator('td').nth(1).locator('span').last()
//locator('table.ci-scorecard-table').locator('tr').filter({hasText:'Amir Jangoo'}).first().locator('td').nth(1).locator('span').last()

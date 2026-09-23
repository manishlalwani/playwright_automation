import { test, expect, BrowserContext, Page } from '@playwright/test';

//use case 1 - single selection : 
// a.username is found on 1st page, 
// b.username is found on any page, 
// c.username on last page, 
// user is not found at all
//use case 2 - multiple selection 


test('webtable dynamic single selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {
        let isUserPresent = await page.locator(`td:has-text("reese_kumar")`).first().isVisible();
        if (isUserPresent) {
            //user is found on the first page itself
            await page.locator('table#dataTable tr').filter({ hasText: 'reese_kumar' }).first().getByRole('checkbox').click();
            break;
        }
        else {
            //username is not present on the 1st page, pagination logic
            //click on the next icon
            let nextElement = page.getByRole('button', { name: '›' });
            await nextElement.click();
            let isNextElementDisabled = await nextElement.isDisabled();
            if (isNextElementDisabled) {
                console.log('pagination is over...username is not found');
                break;
            }

        }

    }

    await page.pause();

});



test('webtable dynamic multiple selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {
        let allUserChecks = await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).getByRole('checkbox').all();

        if (allUserChecks.length > 0) {
            //select all the checkboxes
            for (let ele of allUserChecks) {
                await ele.click();
            }
        }

        //go to the next page 

        let nextElement = page.getByRole('button', { name: '›' });

        let isNextElementDisabled = await nextElement.isDisabled();
        if (isNextElementDisabled) {
            console.log('pagination is over...');
            break;
        }
        await nextElement.click();

    }

    await page.pause();

});


test('homework webtable dynamic single selection test after adding user', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    let userName = 'manish_lalwani';

    await page.getByRole('textbox', { name: 'Username' }).fill(userName);
    await page.getByRole('textbox', { name: 'email' }).fill('manish_lalwani@test.com');
    await page.getByRole('textbox', { name: 'Company' }).fill('UBS');
    await page.getByRole('textbox', { name: 'City' }).fill('Pune');
    await page.getByRole('button', { name: '+ Add Row' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();






    while (true) {
        let isUserPresent = await page.locator(`td:has-text('manish_lalwani')`).first().isVisible();

        if (isUserPresent) {
            //user is found on the first page itself
            await page.locator('table#dataTable tr').filter({ hasText: 'manish_lalwani' }).first().getByRole('checkbox').click();
            break;
        }
        else {
            //username is not present on the 1st page, pagination logic
            //click on the next icon
            let nextElement = page.getByRole('button', { name: '›' });
            await nextElement.click();
            let isNextElementDisabled = await nextElement.isDisabled();
            if (isNextElementDisabled) {
                console.log('pagination is over...username is not found');
                break;
            }

        }

    }

    await page.pause();

});
import { test, expect, BrowserContext, Page } from '@playwright/test';

test('svg element test using special xpath', async ({ page }) => {

    await page.goto('https://flipkart.com');

    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('macbook pro');



    await page.getByRole('button', { name: 'Search for Products, Brands and More' })
        .first()
        .locator('//*[local-name()="svg" and @fill="none"]')
        .click();


    await page.pause();

});


//SVG - Scalable Vector Graphics

//Xpath - normal xpath will not be used

//special xpath - //*[local-name()='svg' and @fill='none']

//Css -svg[fill='none']



test('svg map element test using css', async ({ page }) => {

    await page.goto('https://flipkart.com');

    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('macbook pro');

    await page.getByRole('button', { name: 'Search for Products, Brands and More' })
        .first()
        .locator('svg[fill="none"]').click();




    await page.pause();

});



test('svg map element test using forecast maps', async ({ page }) => {

    await page.goto('https://petdiseasealerts.org/forecast-map/#/');

    //let frame = page.frameLocator('//iframe[contains(@id,"map-instance")]');
    let frame = page.frameLocator('iframe[id*="map-instance"]');


    let statesData = await frame.locator('g.region').all();

    console.log('total number of regions ', statesData.length);

    for (let state of statesData) {
        let stateId = await state.getAttribute('id');
        console.log(stateId);
        await state.hover({ force: true });
        await page.waitForTimeout(200);
    }







    await page.pause();

});



import { test, expect, BrowserContext, Page } from '@playwright/test';



test('graph with tool tips', async ({ page }) => {

    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');

    let allPoints = page.locator('.highcharts-markers .highcharts-point');

    let allDots = await allPoints.all();

    console.log('Total number of dots in graph', allDots.length);

    for (let ele of allDots) {
        await ele.hover(); //trigger the tool-tip
        //we need to find the bounding box and find x and find y coodinates
        //Bounding box - Imaginary box assumed by playwright for each and every element

        let box = await ele.boundingBox();
        let x = box!.x + box!.width / 2;
        let y = box!.y + box!.height / 2;

        await page.mouse.move(x, y);
        let yearAmount = await page.locator('.highcharts-tooltip').textContent();
        console.log(yearAmount);
        //await page.waitForTimeout(500);
    }



});


test('graph with tool tips for bars', async ({ page }) => {

    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');

    await expect(page.locator('.highcharts-container')).toBeVisible();

    let allBarsPrincipal = page.locator('.highcharts-series-1 .highcharts-point');

    let allPrincipal = await allBarsPrincipal.all();

    await expect(allBarsPrincipal.first()).toBeVisible();

    console.log('Total number of principal bars in graph', allPrincipal.length);

    for (let i = 0; i < allPrincipal.length - 1; i++) {

    
        let box = await allPrincipal[i].boundingBox();
        let x = box!.x + box!.width / 2;
        let y = box!.y + 5;

        await page.mouse.move(x, y);
        await page.waitForTimeout(200);
        let yearAmount = await page.locator('.highcharts-tooltip').textContent();
        console.log(yearAmount);
        //await page.waitForTimeout(200);
    }



});


test('graph with tool tips for bars from chatgpt', async ({ page }) => {

    await page.goto(
        'https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html'
    );

    const bars = page.locator(
        '.highcharts-series-1 .highcharts-point'
    );

    await expect(bars.first()).toBeVisible();

    const count = await bars.count();

    console.log('Total number of principal bars in graph:', count);

    for (let i = 0; i < count; i++) {

        const bar = bars.nth(i);

        await bar.hover();

        await page.waitForTimeout(500);

        const tooltip = page.locator('.highcharts-tooltip');

        await expect(tooltip).toBeVisible();

        console.log(
            `Bar ${i + 1}:`,
            await tooltip.textContent()
        );
    }
});
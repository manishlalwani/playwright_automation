import { test, expect, Locator } from '@playwright/test';

test('select all checkboxes  in webtable test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    let checkBoxes = await page.locator('table#resultTable tbody tr td').getByRole('checkbox').all();

    for (let ele of checkBoxes) {
        await ele.click();
        await page.waitForTimeout(500);
    }

    // for (let i = 1; i < checkBoxes.length; i++) {
    //     await checkBoxes[i].click();
    //     await page.waitForTimeout(500);
    // }

    await page.pause();

})


//locator('table.ci-scorecard-table').locator('tr').filter({hasText:'Rishabh'}).first().locator('td').nth(1).locator('span span')


test('Get wicket taker details from match', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/india-in-sri-lanka-2026-1543999/sri-lanka-cricket-xi-vs-india-tour-match-1548444/full-scorecard');


    console.log('Wicket taker of batsman');
    
    let batsmanName = 'Rishabh Pant';
    console.log('Wicket taker of batsman ',batsmanName);
    let wicketTaker =   page
                        .locator('table.ci-scorecard-table')
                        .locator('tr').filter({ hasText: `${batsmanName}` })
                        .first()
                        .locator('td')
                        .nth(1)
                        .locator('span span');

    console.log(await wicketTaker.innerText());

    console.log('-----------------------');
    console.log('Batsman details');
    let playerScoreData = await page.locator('table.ci-scorecard-table')
                .locator('tr')
                .filter({hasText:`${batsmanName}`})
                .first()
                .locator('td')
                .all();

    for(let ele of playerScoreData){
        let details = await ele.textContent();
        console.log(details);
    }

    console.log('-----------------------');
    console.log('Bowler details');
    let bowlerName = 'Mohammed Siraj'

    let bowlerDetails = await page
                            .locator('table.ds-table-auto')
                            .nth(1)
                            .locator('tr')
                            .filter({hasText:`${bowlerName}`})
                            .locator('td')
                            .all();
     for(let ele of bowlerDetails){
        let details = await ele.textContent();
        console.log(details);
    }
    


   

})

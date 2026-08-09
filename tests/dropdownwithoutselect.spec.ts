import { test, expect, Locator, Page } from '@playwright/test';

test('homework : select dropdown without links all links test', async ({ page }) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator('#justAnInputBox').click();

    await page.waitForTimeout(2000);

    selectAllChoice(page);

})

async function selectChoice(page: Page, choices: string[]) {

    for (let choice of choices) {
        await page
            .locator('span.comboTreeItemTitle')
            .filter({ hasText: `${choice}` })
            .first()
            .click();
    }



}

async function selectAllChoice(page: Page) {

    let allChoices = await page.locator('span.comboTreeItemTitle').getByRole('checkbox').all();


    for (let element of allChoices) {
        if (!(await element.isChecked())) {
            await element.click();
        }
    }

}
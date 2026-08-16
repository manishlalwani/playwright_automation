import { test, expect } from '@playwright/test';
import fs from 'fs';


test('Single file download testcase', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    await page.getByRole('link', { name: 'random_data_18.txt' }).click();

    let [filedownload] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'random_data_18.txt' }).click()
    ])

    //during the download no failure

    expect(await filedownload.failure()).toBeNull();

    console.log('file name : ', filedownload.suggestedFilename());

    let filepath = './downloads/' + filedownload.suggestedFilename(); //downloads/random_data_18.txt

    await filedownload.saveAs(filepath);

    //verify the file exists or not

    expect(fs.existsSync(filepath)).toBeTruthy();

    //verify the file size >0 
    let fileSize = fs.statSync(filepath).size;
    console.log('File Size in bytes', fileSize);
    expect(fileSize).toBeGreaterThan(0);



    await page.pause();

});
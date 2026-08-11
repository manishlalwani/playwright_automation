//Java Scrip alerts - JS Pop up
//JS Methods

//1. alert ('message/error message')
//2. confirm ('are you sure')
//3. prompt('enter details to proceed')

import { test, expect } from '@playwright/test';

test('JS alerts testcase', async ({ page }) => {

    //1. - Alert listener - Just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept();
        }
    });

    //2. - Confirm listener - Just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept();//click ok
            //await popup.dismiss();//click ok

        }
    });

    //3. - prompt listener - Just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Hi I am entering text for prompt');//click ok
            //await popup.dismiss();//click ok

        }
    });

    

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();



    await page.pause();


})
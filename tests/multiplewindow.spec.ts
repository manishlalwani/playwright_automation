import {expect,test,Page, Locator} from '@playwright/test'


test('multiple window test',async ({browser})=>{

    let context = await browser.newContext();
    let page = await context.newPage();

    //await page.goto('https://orangehrm.com/contact-sales');
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
   // page.getByRole('region').filter({hasText:'Subscriptions'}).locator('article, [role=article]').filter({has:page.getByRole('heading',{name:'Premium Plan'})}).getByRole('button',{name:'Rem

    

                                                    
    let status = await page.locator('table#table-01 tr td').filter({hasText : 'ORD-500'}).getByRole('cell').nth(2).innerText();
    page.getByRole('columnheader')
    expect(status).toBe('Active');


});
 // test group - test suites ---> multiple test cases
 //test.describe --->. test() test().....

 import {test} from '@playwright/test';


 test.describe('Login related test cases', ()=>{


    test('google title test', async({page}) =>{
        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

     test('google url test', async({page}) =>{
        await page.goto('https://www.google.com');
        console.log(page.url());
    });

     test('google random test', async({page}) =>{
        await page.goto('https://www.google.com');
    });

 });


 test.describe('Search related test cases', ()=>{


    test('google title test', async({page}) =>{
        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

     test('google url test', async({page}) =>{
        await page.goto('https://www.google.com');
        console.log(page.url());
    });

     test('google random test', async({page}) =>{
        await page.goto('https://www.google.com');
    });

 });




 test.describe('OpenCart related test cases', ()=>{


    test.beforeAll(async()=>{
        console.log('connect to db');
    });


    test.beforeEach(async()=>{
        console.log('create a fresh user');
    });

     test.afterAll(async()=>{
        console.log('disconnect to db');
    });


    test.afterEach(async()=>{
        console.log('delete the created user');
    });

    test(' title test', async({page}) =>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        console.log(await page.title());
    });

     test(' url test', async({page}) =>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        console.log(page.url());
    });

     test(' random test', async({page}) =>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    });

 });



 test.describe.serial('user crud test cases', ()=>{


    test('create a user test', async() =>{
        console.log('user is created', 1001);
    });

     test('get a user test', async() =>{
        console.log('retreive a user', 1001);
    });

     test('update a user test', async() =>{
        console.log('update a user', 1001);
    });

     test('delete a user test', async() =>{
        console.log('delete a user', 1001);
    });

 });


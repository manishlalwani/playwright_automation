// hooks - before(set up) and after (tear down)

import { test } from '@playwright/test';

//Runs before all tests file
test.beforeAll(async () => {
    console.log('*** Before all - Connect to the Databse *****');
    // user creation
    // admin settings
    // uploading test data
});


//Runs before each test
test.beforeEach(async () => {
    console.log('****  Before each testcase - login to the url *****');
});

//Runs after each test
test.afterEach(async () => {
    console.log('***** After each testcase - log out the url *****');
});

//Run Once after all the test cases  in the test file 
test.afterAll(async () => {
    console.log('**** After all test cases. -  disconnect the database *****');
    // delete the user
    // reset the admin settings
    // delete the test data from environment
});

test('title test', async () => {
    console.log('title test');
});

test('home page test', async () => {
    console.log('home page test');
});

test('register page test', async () => {
    console.log('register page test');
});


test('payment page test', async () => {
    console.log('payment page test');
});

test('cart page test', async () => {
    console.log('cart page test');
});


test('search page test', async () => {
    console.log('search page test');
});
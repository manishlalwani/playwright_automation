import { test, expect } from '@playwright/test';

//assertions  - expect() method
// soft and hard assertions
// in-build assertoions
// default timeout - 5_000 ms or 5 secs
// expect vs actual - checkpoint , validation

test('expect assertion 1 testcase', async ({ page }) => {


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //expect(100).toBe(101);

    expect(page.url()).toContain('account/register');

    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });

    await expect(header).toBeVisible();

    await expect.soft(header).toHaveText('Register Account');

    expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);


    await page.getByRole('textbox', { name: '* First Name' }).fill('manish kumar lalwani');

    await (expect(page.getByRole('textbox', { name: '* First Name' }))).toHaveValue('manish kumar lalwani');







    console.log('......End......');




});


test('expect assertion 2 testcase', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);

    await page.getByTestId('country-select').selectOption('India');
    await expect(page.getByTestId('country-select')).toHaveValue('in')

});

test('expect assertion 3 testcase state', async ({ page }) => {


    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');



    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();



    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();

    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).not.toBeEditable();





    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();

    await expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).uncheck();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();

    await expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).uncheck();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();

    await expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();

    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).uncheck();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();


    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', 'Enter first name');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveId('firstname', { timeout: 10000 });


    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).toHaveAttribute('readonly', '');




    // await page.pause();

});



test('expect assertion 4 testcase with timeout', async ({ page }) => {


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');



    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });

    await expect.soft(header).toHaveText('Register Account');

    expect(page.locator('#column-right a.list-group-item')).toHaveCount(14);


    // await page.getByRole('textbox', { name: '* First Name' }).fill('manish kumar lalwani');

    // await (expect (page.getByRole('textbox', { name: '* First Name' }))).toHaveValue('manish kumar lalwani');







    console.log('......End......');




});


//AAA pattern - Arrange Act Assert
//test case - Only 1 hard assert
//test case - Multiple soft assertion


// registration page test - steps -- assertions
//1. check the loop -- tc1
//2. check the url -- tc2
//3. check the title -- tc3
//4. check the footer --- tc4
//5. check the right panel size -- tc5
//6. check the first name is visible -- tc6
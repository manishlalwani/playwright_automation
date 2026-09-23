
import { expect, test } from '@playwright/test'

test('title test', async () => {
    console.log('title test');
});

test('url test', async () => {
    console.log('url test');
});


// test.only('search test', async() =>{
//     console.log('search test');
// });


test.skip('cart test', async () => {
    console.log('cart test');
    //work in progress
});

test('payment test', () => {
    test.fixme(); // fix the test later
    console.log('payment test');
})


test('Order test', () => {
    test.fail(); // this is expected oto fail
    console.log('Order test');
    expect(100).toBe(200);
})
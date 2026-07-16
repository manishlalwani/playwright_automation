import { test, expect, BrowserContext, Page } from '@playwright/test';

const url = 'http://localhost:3000';

const userNameInput = '#usernameInput';
const joinBtn = '#joinBtn';
const typeMessageInput = '#messageInput';
const sendMsgBtn = '#sendBtn';
const leaveBtn = '#leaveBtn';

test('Multi User Test', async ({ browser }) => {
    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();
    let ctx3: BrowserContext = await browser.newContext();
    let ctx4: BrowserContext = await browser.newContext();
    let ctx5: BrowserContext = await browser.newContext();

    let manish: Page = await ctx1.newPage();
    let ravin: Page = await ctx2.newPage();
    let manjul: Page = await ctx3.newPage();
    let puneet: Page = await ctx4.newPage();
    let rahul: Page = await ctx5.newPage();


    await joinChat(manish, 'manish');

    await joinChat(ravin, 'ravin');

    await joinChat(manjul, 'manjul');

    await joinChat(puneet, 'puneet');

    await joinChat(rahul, 'rahul');



    await sendMessage(manish, 'Morning everyone! ⛽ Petrol prices have gone up again. Did you notice?');

    await sendMessage(ravin, 'Yes! I filled my car yesterday. It cost me almost ₹3,200. 😩');


    await sendMessage(manjul, 'I read that crude oil prices are rising because of the tensions involving Iran.');

    await sendMessage(puneet, "That's been all over the news. Markets seem pretty nervous.");

    await sendMessage(rahul, 'Even diesel prices have increased. Transport companies will definitely be affected.');



    await sendMessage(manish, 'That means delivery charges for online shopping might go up too.');

    await sendMessage(ravin, 'Swiggy and Zomato delivery fees already look higher in my area.');

    await sendMessage(manjul, 'Logistics companies usually pass the fuel cost on to customers.');

    await sendMessage(puneet, 'I also noticed cab fares have gone up this week.');

    await sendMessage(rahul, 'Uber showed surge pricing even during non-peak hours yesterday. 🚕');

    await sendMessage(manish, 'I have started taking the metro whenever possible. 🚇');

    await sendMessage(ravin, 'Same here. Driving every day is getting expensive.');

    await sendMessage(manjul, 'My office has allowed two work-from-home days every week.');

    await sendMessage(puneet, 'Lucky you! We still have to go to the office every day.');

    await sendMessage(rahul, 'Fuel has become one of my biggest monthly expenses now.');

    await sendMessage(manish, 'Do you think these prices will continue increasing?');

    await sendMessage(manjul, 'It depends on global crude oil supply and how the geopolitical situation develops.');

    await sendMessage(ravin, 'Hopefully things calm down soon.');

    await sendMessage(puneet, 'Otherwise inflation will affect almost everything.');

    await sendMessage(rahul, 'Exactly. Transport costs influence food prices as well.');

    await sendMessage(manish, 'Even vegetables seem more expensive this week.');

    await sendMessage(ravin, 'Milk delivery charges have also increased in my society.');

    // await sendMessage(manjul, 'Businesses usually recover higher transportation costs by increasing product prices.');

    // await sendMessage(puneet, 'I was planning a road trip next month. Now I am reconsidering.');

    // await sendMessage(rahul, 'Maybe take a train instead. It could be cheaper.');

    // await sendMessage(manish, 'Good suggestion. Train tickets are still reasonable.');

    // await sendMessage(ravin, 'I have also started carpooling with my colleagues.');

    // await sendMessage(manjul, 'That saves fuel and reduces traffic too.');

    // await sendMessage(rahul, 'Electric vehicles are becoming more attractive now. ⚡');

    // await sendMessage(puneet, "I'm actually thinking about buying a hybrid car.");

    // await sendMessage(manish, 'Charging costs are much lower than petrol expenses.');

    // await sendMessage(ravin, 'The initial investment is high though.');

    // await sendMessage(manjul, 'True, but long-term running costs are much lower.');

    // await sendMessage(rahul, 'Infrastructure is improving as well. More charging stations are opening.');


    // await sendMessage(puneet, 'Government incentives also help in some states.');

    // await sendMessage(manish, 'I hope public transport also gets better.');

    // await sendMessage(ravin, 'That would encourage more people to leave their cars at home.');

    // await sendMessage(manjul, 'Less traffic and lower pollution would be a nice bonus.');

    // await sendMessage(puneet, 'Absolutely. Everyone benefits from that.');

    // await sendMessage(rahul, "Let's hope the global situation improves soon and fuel prices stabilize. 🤞");

    //  await sendMessage(manish, 'Agreed. Until then, we all need to plan our travel wisely.');

    await sendMessage(ravin, 'Looks like my weekend bike rides will have to wait. 😅');

    await sendMessage(manjul, 'Or switch to cycling for short distances. 🚴');

    await sendMessage(puneet, 'Good for health and good for the wallet! 😂');

    await sendMessage(rahul, 'Haha! That might be the best solution for now.');

    await sendMessage(manish, 'Okay folks, gotta run. Bye everyone! 👋');

    await sendMessage(puneet, 'See you all in the evening. 👋');

    await sendMessage(ravin, 'Bye! Have a great day! 😄');

    await sendMessage(manjul, 'Take care, everyone.');

    await sendMessage(rahul, 'Bye guys! Catch up later. 😊');



    await rahul.locator(leaveBtn).click();
    await manish.locator(leaveBtn).click();
    await ravin.locator(leaveBtn).click();
    await manjul.locator(leaveBtn).click();
    await puneet.locator(leaveBtn).click();



})

async function joinChat(pageObj: Page, username: string) {

    await pageObj.goto(url);
    await pageObj.locator(userNameInput).fill(username);
    await pageObj.locator(joinBtn).click();
}

async function sendMessage(pageObj: Page, message: string) {
    await pageObj.locator(typeMessageInput).fill(message);
    await pageObj.locator(sendMsgBtn).click();
}
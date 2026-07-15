import { Browser, Page } from "@playwright/test"
import { launchBrowser } from "./launch.ts"

let browser: Browser = await launchBrowser('chrome1')
let page: Page = await browser.newPage();
page.goto("https://www.google.com");
page.pause();
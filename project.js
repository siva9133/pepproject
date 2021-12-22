//node project.js --url=https://wikipedia.org --outputFile=output.html
let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
let axios = require("axios");
const { cachedDataVersionTag } = require("v8");

let args = minimist(process.argv);



async function start() {
    // start the browser
    let browser = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ],
        defaultViewport: null
    });

    // get the tabs (there is only one tab)
    let pages = await browser.pages();
    let page = pages[0];

    // open the url
    await page.goto(args.url);

    await page.waitForSelector("a[href='//en.wikipedia.org/']");
    await page.click("a[href='//en.wikipedia.org/']");

    await page.waitFor(2000);

    await page.waitForSelector("a[href='/wiki/Wikipedia:Contents/Portals']");
    await page.click("a[href='/wiki/Wikipedia:Contents/Portals']");

    await page.waitFor(2000);

    await page.waitForSelector("a[href='/wiki/Wikipedia:Contents/A%E2%80%93Z_index']");
    await page.click("a[href='/wiki/Wikipedia:Contents/A%E2%80%93Z_index']");

    await page.waitFor(2000);

    await page.waitForSelector("a[href='/wiki/Special:AllPages/B']");
    await page.click("a[href='/wiki/Special:AllPages/B']");

    await page.waitFor(1000);

    await page.waitForSelector("a[href='/wiki/B']");
    await page.click("a[href='/wiki/B']");


    






}
start();
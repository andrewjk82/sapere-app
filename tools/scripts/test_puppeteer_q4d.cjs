const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err));

  const filePath = `file://${path.resolve('test_q4d.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
  console.log('DONE');
}
run().catch(console.error);

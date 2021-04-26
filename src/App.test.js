// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import puppeteer from "puppeteer";

let browser;
let page;

beforeAll(async() => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 30

    });
    jest.setTimeout(3000);
    page = await browser.newPage();
    await page.goto('http://localhost/3000/');
    await page.waitFor(2000)
});

// 1
test("Connected to site properly!", async() => {
    await page.waitForSelector(".header");

    const header = await page.$eval(".header", e => e.innerHTML);
    expect(header).toBe("Credit Card Validation");
});
afterAll(async() => {
    browser.close();
});
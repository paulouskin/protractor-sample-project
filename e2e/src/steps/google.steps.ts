import {Given, When, Then} from "cucumber"
import { browser } from 'protractor'
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(/^I disable Angular check for Protractor$/, async () => {
    await browser.waitForAngularEnabled(false);
});

When(/^I go to Google main page$/, async () => {
    await browser.get("http://www.google.com");
});

Then(/^page title contains "(.*?)" text$/, async (text:string) => {
    await expect(browser.getTitle()).to.eventually.contains(text);
});
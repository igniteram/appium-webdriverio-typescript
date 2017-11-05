import { AppiumPage, GooglePage } from "../pages/appiumPage";
const { Given, When, Then, BeforeAll } = require("cucumber");
import {expect} from "chai";

Given(/^I am on google page$/, () => {
    expect(browser.getTitle()).to.equal("Google");
});

When(/^I type "(.*?)"$/, (text) => {
    GooglePage.searchTextBox.setValue(text);
});

When(/^I click on first search link$/, () => {
    GooglePage.firstLink.click();
});

Then(/^I click on search button$/, () => {
    GooglePage.searchButton.click();
});

Then(/^appium links should be displayed$/, () => {
    expect(GooglePage.results).to.equal(true);
});

Then(/^I should be navigated to appium's official site "(.*?)"$/, (expectedUrl) => {
    browser.waitUntil(async function() {
        const url = await browser.getUrl();
        return url === expectedUrl;
    },5000, `expected url to be ${expectedUrl}`);  
});

Then(/^I verify the title of the page to be "(.*?)"$/, (expectedTitle) => {
    browser.waitUntil(async function() {
        const title = await browser.getTitle();
        return title === expectedTitle;
    },5000, `expected url to be ${expectedTitle}`); 
});

When(/^I click on top menu button$/, () => {
    AppiumPage.linkButton.click();
});

When(/^I click on tutorial link$/, () => {
    AppiumPage.tutorialLink.click();
});

Then(/^I click on android tutorial link$/, () => {
    AppiumPage.androidLink.click();
});

Then(/^I verify the title of android tutorial page to be "(.*?)"$/, (expectedTitle) => {
    browser.waitUntil(function() {
        const title = AppiumPage.androidTutorialTitle;
        return title === expectedTitle;
    },5000, `expected url to be ${expectedTitle}`); 
});
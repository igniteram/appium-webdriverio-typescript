import { SearchPage } from "../pages/searchPage";
const { Given, When, Then, BeforeAll } = require("cucumber");
import {expect} from "chai";

Given(/^I am on google page$/, () => {
    expect(browser.getTitle()).to.equal("Google");
});

When(/^I type "(.*?)"$/, (text) => {
     SearchPage.searchTextBox.setValue(text);
});

Then(/^I click on search button$/, () => {
     SearchPage.searchButton.click();
});

Then(/^I clear the search text$/, () => {
     SearchPage.searchTextBox.clearElement();
});
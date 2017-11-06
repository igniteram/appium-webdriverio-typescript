/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

const {Given, When, Then} = require('cucumber');
import {expect} from 'chai';
import {CalculatorPageObject} from '../pages/calcPage';

const calc: CalculatorPageObject = new CalculatorPageObject();

Given(/^I am on my mobile calculator app$/, () => {
    const title = browser.getText('android.widget.TextView');
    expect(title).to.equal('Calculator');
});

When(/^I add "(.*?)" and "(.*?)"$/,  (num1: string, num2: string) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.addOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});

When(/^I subtract "(.*?)" from "(.*?)"$/,  (num1: string, num2: string) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.subtractOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});

When(/^I multiply "(.*?)" with "(.*?)"$/,  (num1: string, num2: string) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.multiplyOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});

When(/^I divide "(.*?)" with "(.*?)"$/,  (num1: string, num2: string) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.divisionOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});

When(/^I click on AC button$/, () => {
    browser.click(calc.clearOperator);
});

Then(/^the result "(.*?)" should be displayed$/, (result: string) => {
    return expect(browser.getText(calc.outputText)).to.contain(result);
});

Then(/^the result should be cleared$/, () => {
    return expect(browser.getText(calc.outputText)).to.equal('');
});

const {Given, When, Then} = require('cucumber');
import {expect} from 'chai';
import {CalculatorPageObject} from '../pages/calcPage';

const calc: CalculatorPageObject = new CalculatorPageObject();

Given(/^I am on my mobile calculator app$/, () => {
    const title = browser.getText('android.widget.TextView');
    expect(title).to.equal('Calculator');
});

When(/^I add "(.*?)" and "(.*?)"$/,  (num1: string,num2:string) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.addOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);

    // browser.click('android=new UiSelector().resourceId("com.android.calculator2:id/digit3")');
    // browser.click('android=new UiSelector().resourceId("com.android.calculator2:id/plus")');
    // browser.click('android=new UiSelector().resourceId("com.android.calculator2:id/digit5")');
    // browser.click('android=new UiSelector().resourceId("com.android.calculator2:id/equal")');
     
});

Then(/^the result "(.*?)" should be displayed$/,  (result: string) => {
    return expect(browser.getText(calc.outputText)).to.contain(result);
});
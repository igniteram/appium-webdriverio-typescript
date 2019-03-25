/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports GooglePageObject & AppiumPageObject classes
 */

class GooglePageObject {
    public get searchTextBox(): any { return browser.element('input[type="search"]'); }
    public get searchButton(): any { return browser.element('button[aria-label="Google Search"]'); }
    public get results(): any { return browser.waitForVisible('#ires #rso', 5000); }
    public get firstLink(): any { return browser.element('#rso > div:nth-child(1) > div > div > div > div:nth-child(1) > div > a'); }
}

class AppiumPageObject {
    public get linkButton(): any { return browser.element('body > nav.navbar.navbar-inverse.navbar-static-top button'); }
    public get tutorialLink(): any { return browser.element('#bs-example-navbar-collapse-1 > ul > li:nth-child(7) > a'); }
    public get firstBook(): any { return browser.element('#readmeMarkdown > div:nth-child(1) > a.resource-title'); }
    public get androidTutorialTitle(): any { return browser.element('#native-android-automation').getText(); }
}

/*
Public Interface - export instances of classes
**/
export const GooglePage = new GooglePageObject();
export const AppiumPage = new AppiumPageObject();

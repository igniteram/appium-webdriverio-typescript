class SearchPageObject {
    public get searchTextBox(): any { return browser.element('#lst-ib');};
    public get searchButton(): any { return browser.element('button[name="btnG"]');};

}

export const SearchPage = new SearchPageObject();

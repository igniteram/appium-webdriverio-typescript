/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports CalculatorPageObject class
 */

export class CalculatorPageObject {
    public addOperator: string;
    public subtractOperator: string;
    public multiplyOperator: string;
    public divisionOperator: string;
    public equalOperator: string;
    public clearOperator: string;
    public outputText: string = 'com.android.calculator2.CalculatorEditText';
    public idLocator: string = 'com.android.calculator2:id/';
    public digitLocator: string = 'com.android.calculator2:id/digit';

    constructor() {
        this.addOperator = this.androidIDSelector(this.calcOperatorSelector('plus'));
        this.subtractOperator = this.androidIDSelector(this.calcOperatorSelector('minus'));
        this.multiplyOperator = this.androidIDSelector(this.calcOperatorSelector('mul'));
        this.divisionOperator = this.androidIDSelector(this.calcOperatorSelector('div'));
        this.equalOperator = this.androidIDSelector(this.calcOperatorSelector('equal'));
        this.clearOperator = this.androidIDSelector(this.calcOperatorSelector('allClear'));
        this.outputText = this.androidClassSelector(this.outputText);
    }

    public calcDigitSelector = (selector: string): string => {
        return this.androidIDSelector(this.digitLocator + selector);
    }

    private androidIDSelector = (selector: any): string => {
        let str = `'android=new UiSelector().resourceId("${selector}")'`;
        str = str.substring(1, str.length - 1);
        return str;
    }

    private androidClassSelector = (selector: any): string => {
        let str = `'android=new UiSelector().className("${selector}")'`;
        str = str.substring(1, str.length - 1);
        return str;
    }

    private calcOperatorSelector = (selector: string): string => {
        return this.idLocator + selector;
    }
}

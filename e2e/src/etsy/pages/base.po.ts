import { element, promise} from 'protractor';
import { Locator } from 'protractor/built/locators';

export class BasePageObject{

    constructor(protected browser) {
        this.browser = browser;
    }

    getTextForElements(locator: Locator): promise.Promise<string> {
        return element.all(locator).getText();
    }
}
import { element, promise} from 'protractor';
import { Locator } from 'protractor/built/locators';

export class BasePageObject{
    getTextForElements(locator: Locator): promise.Promise<string> {
        return element.all(locator).getText();
    }
}
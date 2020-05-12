import { By, element, promise, WebElement, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePageObject } from './base.po';

export class MainPage extends BasePageObject {

    GDPR_WINDOW = By.css('.alert.bg-orange-lightest');
    GDPR_ACCEPT_BUTTON = By.css('.btn-outline-black');
    GDPR_CONFIRMATION_POPUP = By.css('.alert-success');

    acceptGDPRPolicy() {
        const gdprModal = this.getGDPRModalWindow();
        gdprModal.element(this.GDPR_ACCEPT_BUTTON).click();
    }

    getGDPRModalWindow():ElementFinder {
        return element(this.GDPR_WINDOW);
    }

    isGDPRPolicyAccepted() {
        const isConfirmModalVisible =  
            ExpectedConditions.visibilityOf(element(this.GDPR_CONFIRMATION_POPUP));
        this.browser.wait(isConfirmModalVisible, 2000);
        return element(this.GDPR_CONFIRMATION_POPUP).isDisplayed();
    }

}
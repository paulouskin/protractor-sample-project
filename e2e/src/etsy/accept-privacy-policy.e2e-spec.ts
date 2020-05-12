import { browser } from "protractor"
import { MainPage } from './pages/main-page.po';

describe("Sample test should go to etsy.com main page", () => {

    const mainPage = new MainPage(browser);

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(async () => {
        await browser.get('http://www.etsy.com');
    });

    it("and accept GDPR policy ", async () => {
        await mainPage.acceptGDPRPolicy();
        expect(await mainPage.isGDPRPolicyAccepted()).toBe(true);
    });
})
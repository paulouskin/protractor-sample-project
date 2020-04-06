import { browser, logging } from 'protractor';

describe('Sample protractor runner', () => {

  it("should go to Google page", async (done) => { 
    browser.waitForAngularEnabled(false);
    browser.get("http://www.google.com");
    expect(browser.getTitle()).toContain('Google');
    done();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

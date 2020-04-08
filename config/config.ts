import { Config, browser } from 'protractor';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 5000,
  specs: [
    '../../../e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: () => {
      browser.ignoreSynchronization = true
  },
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ["../e2e/src/steps/**/*.steps.js"],
    strict: true
    }
}
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    elementScrollBehavior: '1',
    browserName: 'chrome'
  },
  specs: [ 'test-spec.js' ],
  seleniumAddress: 'http://192.168.1.103:4444/wd/hub',
  directConnect: false,
  SELENIUM_PROMISE_MANAGER: true,
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
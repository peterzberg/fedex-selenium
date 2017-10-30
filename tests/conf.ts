import {Config} from 'protractor';

let host:string = process.env.seleniumHost ? process.env.seleniumHost : 'localhost';
let port:string = process.env.seleniumPort ? process.env.seleniumPort : '4444'

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    elementScrollBehavior: '1',
    browserName: 'chrome'
  },
  specs: [ 'test-spec.js' ],
  seleniumAddress: 'http://' + host + ':' + port + '/wd/hub',
  directConnect: false,
  SELENIUM_PROMISE_MANAGER: true,
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
import { ElementFinder } from 'protractor';

let message: ElementFinder = element(by.className('message'));

describe('Page2', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have correct text when Goodbye Ionic is selected', () => {
    element(by.css('.bar-button-menutoggle')).click();
    element.all(by.css('ion-label')).last().click();
    expect(message.getText()).toEqual('Bye!');
  });
});

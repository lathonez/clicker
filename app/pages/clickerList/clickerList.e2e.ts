import { ElementFinder } from 'protractor';

let clickerField: ElementFinder = element(by.css('.text-input'));
let clickerButton: ElementFinder = element.all(by.className('button')).first();
let removeButton: ElementFinder = element.all(by.css('.button-outline-danger')).first();
let clickerList: ElementFinder = element.all(by.className('clickerList')).first();

describe('ClickerList', () => {

  beforeEach(() => {
    browser.get('');
  });

  // it('should display Clickers when Clickers link is selected', () => {
  //   element(by.css('.bar-button-menutoggle')).click();
  //   element.all(by.css('ion-label')).first().click();
  //   clickerField.sendKeys('deal with protractor');
  //   clickerButton.click();
  //   expect(clickerList.getText()).toContain('deal with protractor');
  // });

  it('has an input box for new Clickers', () => {
    expect(element(by.css('.text-input')).isPresent()).toEqual(true);
  });

  // it('should add a new Clicker to the page', () => {
  //   clickerField.sendKeys('deal with protractor');
  //   clickerButton.click();
  //   expect(clickerList.getText()).toContain('deal with protractor');
  // });

  it('should delete a Clicker from the page when delete button selected', () => {
    clickerField.sendKeys('master angular');
    clickerButton.click();
    removeButton.click();
    expect(clickerList.getText()).not.toContain('master angular');
  });
});

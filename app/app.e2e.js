describe('App', () => {

  var clickerField = element(by.css('.text-input'));
  var clickerButton = element(by.className('button'));
  var clickerList = element(by.className('clickerList'));

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Ionic');
  });

  it('should have <nav>', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar:first-child')).getText()).toEqual('Clickers');
  });

  it('has a menu button that displays the left menu', () => {
    element(by.css('.bar-button-menutoggle')).click();
    expect(element(by.css('.toolbar-title')).getText()).toEqual('Menu');
  });

  it('has an input box for new Clickers', () => {
    expect(element(by.css('.text-input')).isPresent()).toEqual(true);
  });

  it('should add a new Clicker to the page', () => {
    clickerField.sendKeys('deal with protractor');
    clickerButton.click();
    expect(clickerList.getText()).toContain('deal with protractor');
  });

  it('should delete a Clicker from the page when delete button selected', () => {
    clickerField.sendKeys('master angular');
    clickerButton.click();
    element(by.css('.button-outline-danger')).click();
    expect(clickerList.getText()).not.toContain('master angular');
  });

});

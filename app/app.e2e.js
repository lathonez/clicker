describe('App', () => {

  var clickerField = element(by.css('.text-input'));
  var clickerButton = element.all(by.className('button')).first();
  var removeButton = element.all(by.css('.button-outline-danger')).first();
  var clickerList = element.all(by.className('clickerList')).first();
  var message = element(by.className('message'));

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
    expect(element.all(by.css('.toolbar-title')).first().getText()).toEqual('Menu');
  });

  it('the left menu has a link with title Clickers', () => {
    element(by.css('.bar-button-menutoggle')).click();
    expect(element.all(by.css('ion-label')).first().getText()).toEqual('Clickers');
  });

  it('should display Clickers when Clickers link is selected', () => {
    element(by.css('.bar-button-menutoggle')).click();
    element.all(by.css('ion-label')).first().click();
    clickerField.sendKeys('deal with protractor');
    clickerButton.click();
    expect(clickerList.getText()).toContain('deal with protractor');
  });

  it('the left menu has a link with title Goodbye Ionic', () => {
    element(by.css('.bar-button-menutoggle')).click();
    expect(element.all(by.css('ion-label')).last().getText()).toEqual('Goodbye Ionic');
  });

  it('should have correct text when Goodbye Ionic is selected', () => {
    element(by.css('.bar-button-menutoggle')).click();
    element.all(by.css('ion-label')).last().click();
    expect(message.getText()).toEqual('Bye!');
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
    removeButton.click();
    expect(clickerList.getText()).not.toContain('master angular');
  });

});

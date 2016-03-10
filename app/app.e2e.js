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


  it('has an input box for new Clickers', () => {
    expect(element(by.css('.text-input')).isPresent()).toEqual(true);
  });

  xit('should have correct nav text for About', () => {
      expect(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('ABOUT');

  });

  it('has a menu button that displays the left menu', () => {
      element(by.css('.bar-button-menutoggle')).click();
      expect(element(by.css('.toolbar-title')).getText()).toEqual('Menu');

  });


  it('should add a new Clicker to the page', () => {
    clickerField.sendKeys('deal with protractor');
    clickerButton.click();
    expect(clickerList.getText()).toContain('deal with protractor');
  });


});

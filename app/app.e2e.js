describe('App', () => {

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

});

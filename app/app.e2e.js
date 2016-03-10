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

  it('should have correct nav text for About', () => {
      expect(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('ABOUT');
  });
});

import { ClickerApp }                      from './app.component';
import { MenuMock, PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks';
import { TranslateServiceMock }            from '../services/translate.mock';
import { Page2 }                           from '../pages';

let instance: ClickerApp = null;

describe('ClickerApp', () => {

  beforeEach(() => {
    instance = new ClickerApp(
      (<any> PlatformMock.instance()),
      (<any> MenuMock.instance()),
      (<any>SplashScreenMock.instance()),
      (<any>StatusBarMock.instance()),
      (<any>new TranslateServiceMock()),
    );

    // ionic-mocks have lost the nav mock
    instance.nav = (<any>{});
    instance.nav.setRoot = (<any>(() => true));
    spyOn(instance.nav, 'setRoot');
  });

  it('initialises with two possible pages', () => {
    expect(instance['pages'].length).toEqual(2);
  });

  it('initialises with a root page', () => {
    expect(instance['rootPage']).not.toBe(null);
  });

  it('opens a page', () => {
    instance.openPage(instance['pages'][1]);
    expect(instance['menu']['close']).toHaveBeenCalled();
    expect(instance['nav'].setRoot).toHaveBeenCalledWith(Page2);
  });
});

import { ClickerApp }                      from './app.component';
import { MenuMock, NavMock, PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks';
import { TranslateServiceMock }              from '../services/translate.mock';
import { Page2 }                           from '../pages';

let instance: ClickerApp = null;

describe('ClickerApp', () => {

  beforeEach(() => {
    let translate: any = new TranslateServiceMock();
    instance = new ClickerApp((<any> PlatformMock.instance()), (<any> MenuMock.instance()),
      (<any>SplashScreenMock.instance()), (<any>StatusBarMock.instance()), translate);
    instance['nav'] = NavMock.instance();
  });

  it('initialises with two possible pages', done => {
    instance['initializeApp']()
      .then(() => {
        expect(instance['pages'].length).toEqual(2);
        done();
      });
  });

  it('initialises with a root page', () => {
    expect(instance['rootPage']).not.toBe(null);
  });

  it('opens a page', done => {
    instance['initializeApp']()
      .then(() => {
        instance.openPage(instance['pages'][1]);
        expect(instance['menu']['close']).toHaveBeenCalled();
        expect(instance['nav'].setRoot).toHaveBeenCalledWith(Page2);
        done();
      });
  });
});

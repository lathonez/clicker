import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtils }                 from '../test';
import { ClickerApp }                from './app.component';
import { Page2 }                     from '../pages';

let instance: ClickerApp = null;

describe('ClickerApp', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule(ClickerApp);
    let fixture: ComponentFixture<ClickerApp> = TestBed.createComponent(ClickerApp);
    instance = fixture.debugElement.componentInstance;
  });

  it('initialises with two possible pages', () => {
    expect(instance['pages'].length).toEqual(2);
  });

  it('initialises with a root page', () => {
    expect(instance['rootPage']).not.toBe(null);
  });

  it('initialises with an app', () => {
    expect(instance['app']).not.toBe(null);
  });

  it('opens a page', () => {
    spyOn(instance['menu'], 'close');
    // cant be bothered to set up DOM testing for app.ts to get access to @ViewChild (Nav)
    instance['nav'] = (<any>instance['menu']);
    spyOn(instance['nav'], 'setRoot');
    instance.openPage(instance['pages'][1]);
    expect(instance['menu']['close']).toHaveBeenCalled();
    expect(instance['nav'].setRoot).toHaveBeenCalledWith(Page2);
  });
});

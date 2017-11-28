import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule }                  from '@angular/forms';
import { TranslateService }                                  from '@ngx-translate/core';
import {
  App,
  AlertController,
  Config,
  DeepLinker,
  Form,
  IonicModule,
  Keyboard,
  DomController,
  MenuController,
  NavController,
  Platform,
}                                                            from 'ionic-angular';
import { AlertControllerMock, ConfigMock, PlatformMock }     from 'ionic-mocks';
import { TranslateServiceMock }                              from '../../services/translate.mock';
import { TranslatePipeMock }                                 from '../../pipes/translate.pipe.mock';
import { Page2 }                                             from './page2';
import { LanguagePicker }                                    from '../../components';

let fixture: ComponentFixture<Page2> = null;
let instance: any = null;

let alertSpy: any;
let alertControllerSpy: any;

describe('Pages: Page2', () => {

  // demonstration on how to manually compile the test bed (as opposed to calling TestUtils)
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [Page2, LanguagePicker, TranslatePipeMock],
      providers: [
        App, DomController, Form, Keyboard, MenuController, NavController,
        {provide: Config, useFactory: () => ConfigMock.instance()},
        {provide: Platform, useFactory: () => PlatformMock.instance()},
        {provide: AlertController, useFactory: () => AlertControllerMock.instance()},
        {provide: TranslateService, useClass: TranslateServiceMock},
        {provide: DeepLinker, useFactory: () => ConfigMock.instance()},
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(Page2);
      instance = fixture.componentInstance;
      fixture.detectChanges();
      instance.onGainChange();

      alertSpy = fixture.componentInstance.alertController;
      alertControllerSpy = fixture.componentInstance.alertController.create();

    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create page2', () => {
    expect(fixture).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('subscribes to onLangChange', (done) => {

    let doneFn: Function = (() => {
      expect(instance.setAlertLang).toHaveBeenCalled();
      done();
    });

    spyOn(instance, 'setAlertLang');

    instance.translateService.onLangChange.subscribe(doneFn);

    instance.translateService.onLangChange.emit();
  });

  it('sets alert lang', () => {

    spyOn(instance.translateService, 'get').and.returnValue({subscribe: ((fn) => fn('TEST LANGS'))});

    instance.setAlertLang();

    expect(instance.i18ns).toEqual('TEST LANGS');
  });

  it('should fire the simple alert', fakeAsync(() => {

    alertSpy.create.calls.reset();
    alertControllerSpy.present.calls.reset();

    expect(alertSpy.create).not.toHaveBeenCalledTimes(1);
    expect(alertControllerSpy.present).not.toHaveBeenCalledTimes(1);

    expect(alertSpy.create).not.toHaveBeenCalled();
    expect(alertControllerSpy.present).not.toHaveBeenCalled();

    instance.showSimpleAlert();
    tick();

    expect(alertSpy.create).toHaveBeenCalledTimes(1);
    expect(alertControllerSpy.present).toHaveBeenCalledTimes(1);

    expect(alertSpy.create).toHaveBeenCalled();
    expect(alertControllerSpy.present).toHaveBeenCalled();

  }));

  it('should fire the more advanced alert', fakeAsync(() => {

    alertSpy.create.calls.reset();
    alertControllerSpy.present.calls.reset();

    instance.okEd = false;

    expect(instance.okEd).toBeFalsy();

    instance.showMoreAdvancedAlert();
    tick();

    instance.OK();

    expect(instance.okEd).toBeTruthy();

  }));

});

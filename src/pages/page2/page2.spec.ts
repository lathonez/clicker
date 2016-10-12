import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { App, MenuController, NavController, Platform, Config, Keyboard, Form, IonicModule }  from 'ionic-angular';
import { ConfigMock, FormMock, NavMock, PlatformMock } from '../../../test/mocks';
import { Page2 } from './page2';

describe('Pages: Page2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Page2,
      ],
      providers: [
        {provide: App, useClass: ConfigMock},
        {provide: Config, useClass: ConfigMock},
        {provide: Form, useClass: FormMock},
        {provide: Keyboard, useClass: ConfigMock},
        {provide: MenuController, useClass: ConfigMock},
        {provide: NavController, useValue: NavMock},
        {provide: Platform, useValue: PlatformMock},
      ],
      imports: [ IonicModule ],
    });
  });

  it('should create page2', async(() => {
    let fixture: ComponentFixture<Page2> = TestBed.createComponent(Page2);
    let instance: any = fixture.debugElement.componentInstance;
    expect(instance).toBeTruthy();
  }));
});

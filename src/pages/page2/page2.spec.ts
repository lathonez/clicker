import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App, MenuController, NavController, Platform, Config, Keyboard, Form, IonicModule }  from 'ionic-angular';
import { ConfigMock } from '../../mocks';
import { Page2 }      from './page2';

let fixture: ComponentFixture<Page2> = null;
let instance: any = null;

describe('Pages: Page2', () => {

  // demonstration on how to manually compile the test bed (as opposed to calling TestUtils)
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [Page2],
      providers: [
        App, Platform, Form, Keyboard, MenuController, NavController,
        {provide: Config, useClass: ConfigMock},
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(Page2);
      instance = fixture;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create page2', () => {
    expect(fixture).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});

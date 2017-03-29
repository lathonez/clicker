import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ClickerApp } from './app.component';

describe('ClickerApp Component', () => {
  let fixture: any;
  let component: ClickerApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickerApp],
      imports: [
        IonicModule.forRoot(ClickerApp),
      ],
      providers: [
        StatusBar,
        SplashScreen,
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerApp);
    component = fixture.componentInstance;
  });

  //
  // Adding any tests here (even empty) cause ClickerButton."does a click" and ClickerForm."passes new clicker through to service" to fail
  //

  // it ('should be created', () => {
  //   expect(component instanceof ClickerApp).toBe(true);
  // });
  //
  // it ('should have two pages', () => {
  //   expect(component.pages.length).toBe(2);
  // });

});

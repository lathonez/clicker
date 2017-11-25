import { Component }       from '@angular/core';
import { NavController }   from 'ionic-angular';
import { AppVersion }      from '@ionic-native/app-version';
import { ClickersService } from '../../services';

@Component({
  templateUrl: './clickerList.html',
})

export class ClickerList {

  public clickerService: ClickersService;
  public title: string;
  private nav: NavController;
  private appVersion: AppVersion;
  private version: string;

  constructor(nav: NavController, clickerService: ClickersService, appVersion: AppVersion) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
    this.appVersion = appVersion;
  }

  // set app version onInit in the footer
  public ngOnInit(): Promise<string> {
    return this.getAppVersion()
      .then(version => {
        return this.version = version;
      })
      .catch(() => {
        // cordova unavailable
        return this.version = 'DEVEL';
      });
  }

  // wrapper for native code used in testing
  public getAppVersion(): Promise<string> {
    return this.appVersion.getVersionNumber();
  }
}

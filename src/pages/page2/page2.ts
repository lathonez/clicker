'use strict';

import { Component } from '@angular/core';
import { Alert, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './page2.html',
})

export class Page2 {

  public okEd: boolean;
  public alert1: Alert;
  public alertController: AlertController;
  public translateService: TranslateService;
  public i18ns: object;
  public title: string = 'TITLE.PAGE2';

  constructor(alertController: AlertController, translateService: TranslateService) {
    this.title = 'TITLE.PAGE2';
    this.alertController = alertController;
    this.translateService = translateService;
    translateService.get(['BUTTON.OK',
        'BUTTON.OK_ADVANCED',
        'BUTTON.DISMISS',
        'TITLE.ALERT_SIMPLE',
        'TITLE.ALERT_ADVANCED',
      ])
      .subscribe(i18ns => this.i18ns = i18ns);
  }

  public onGainChange(): void {
    return;
  }

  public showSimpleAlert(): any {

    this.alert1 = this.alertController.create({
      title: this.i18ns['TITLE.ALERT_SIMPLE'],
      buttons: [this.i18ns['BUTTON.OK'], this.i18ns['BUTTON.DISMISS']],
    });

    this.alert1.present();
  }

  public showMoreAdvancedAlert(): any {

    this.alert1 = this.alertController.create({
      title: this.i18ns['TITLE.ALERT_ADVANCED'],
      buttons: [{
        text: this.i18ns['BUTTON.OK_ADVANCED'],
        handler: this.OK,
      }
        , this.i18ns['BUTTON.DISMISS']],
    });

    this.alert1.present();
  }

  public OK = () => {

    this.okEd = true;
  }
}

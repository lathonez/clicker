'use strict';

import { Component }        from '@angular/core';
import {Alert, AlertController} from 'ionic-angular';

@Component({
  templateUrl: './page2.html',
})

export class Page2 {

  Oked: boolean;
  alert1: Alert;

  constructor(public alertController:AlertController) {

  };

  public title: string = 'Page 2';

  public onGainChange(): void {
    return;
  }

  public showSimpleAlert(){

    this.alert1 = this.alertController.create({
      title : 'This is an example for an alert',
      buttons : ['Ok', 'Dismiss']
    })

    this.alert1.present();


  }


  public showMoreAdvancedAlert(){

    this.alert1 = this.alertController.create({
      title : 'This is an example for an alert',
      buttons : [{

        text : 'More Advanced Ok',
        handler : this.OK

      }

        , 'Dismiss']
    })
    this.alert1.present();
  }

  OK = () => {

    this.Oked = true;
  }





}

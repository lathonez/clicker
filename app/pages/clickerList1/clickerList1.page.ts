import { Component }                  from '@angular/core';
import { NavController }              from 'ionic-angular';
import { Clickers }                   from '../../services';
import { ClickerButton, ClickerForm } from '../../components';
import { Clicker }     from '../../models';

@Component({
  templateUrl: 'build/pages/clickerList1/clickerList1.page.html',
  directives: [ClickerButton, ClickerForm],
})

export class ClickerList1Page {

  private clickerService: Clickers;
  private nav: NavController;
  private title: string;

  public clickers: Array<Clicker>;

  constructor(
    nav: NavController,
    clickerService: Clickers
  ) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers - ngrx';
  }

  public ionViewLoaded() {
    // this.fiveBooksService.initialise();
    this.clickers = this.clickerService.getClickers();
  }

  public removeClicker(id: string): void {
    this.clickerService.removeClicker(id);
    this.clickers = this.clickerService.getClickers();
  }
}

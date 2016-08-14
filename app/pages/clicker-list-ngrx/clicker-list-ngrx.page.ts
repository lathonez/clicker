import { Component }                  from '@angular/core';
import { NavController }              from 'ionic-angular';
import { Clickers }                   from '../../services';
import { ClickerNgrxButton, ClickerNgrxForm } from '../../components';
import { Clicker }     from '../../models';

@Component({
  templateUrl: 'build/pages/clicker-list-ngrx/clicker-list-ngrx.page.html',
  directives: [ClickerNgrxButton, ClickerNgrxForm],
})

export class ClickerListNgrxPage {

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

  public doClick(id: string): void {
     this.clickerService.doClick(id);
  }

  public ionViewLoaded(): void {
    this.clickers = this.clickerService.getClickers();
  }

  public newClicker(name: string): void {
    this.clickerService.newClicker(name);
  }

  public removeClicker(id: string): void {
    this.clickerService.removeClicker(id);
    this.clickers = this.clickerService.getClickers();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClickerService } from '../../services';
import { ClickerNgrxButton, ClickerNgrxForm } from '../../components';
import { Clicker }     from '../../models';
import { Observable } from 'rxjs/Observable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'build/pages/clicker-list-ngrx/clicker-list-ngrx.page.html',
  directives: [ClickerNgrxButton, ClickerNgrxForm],
})

export class ClickerListNgrxPage {

  public data$: Observable<Clicker[]>;
  public isFetching$: Observable<boolean>;

  private title: string;

  /* tslint:disable: no-constructor-vars */
  constructor(
    private clickerService: ClickerService,
    private nav: NavController
  ) {
    this.nav = nav;
    this.title = 'Clickers - ngrx';

    this.isFetching$ = clickerService.isFetching();
    this.data$ = clickerService.getData();
  }

  public doClick(id: string): void {
    this.clickerService.doClick(id);
  }

  public ionViewLoaded(): void {
    this.clickerService.initialise();
  }

  public newClicker(name: string): void {
    this.clickerService.newClicker(name);
  }

  public removeClicker(id: string): void {
    this.clickerService.removeClicker(id);
  }
}

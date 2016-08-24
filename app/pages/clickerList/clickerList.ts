import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController }                      from 'ionic-angular';
import { Observable }                         from 'rxjs/Observable';
import { ClickersService }                    from '../../services';
import { ClickerButton, ClickerForm }         from '../../components';
import { Clicker }                            from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'build/pages/clickerList/clickerList.html',
  directives: [ClickerButton, ClickerForm],
})

export class ClickerList {

  public data$: Observable<Clicker[]>;
  public isFetching$: Observable<boolean>;

  private title: string;
  private clickersService: ClickersService;
  private nav: NavController;

  constructor(clickerService: ClickersService, nav: NavController) {
    this.nav = nav;
    this.title = 'Clickers';

    this.isFetching$ = clickerService.isFetching();
    this.data$ = clickerService.getData();
    this.clickersService = clickerService;
  }

  public doClick(id: string): void {
    this.clickersService.doClick(id);
  }

  public ionViewLoaded(): void {
    this.clickersService.initialise();
  }

  public newClicker(name: string): void {
    this.clickersService.newClicker(name);
  }

  public removeClicker(id: string): void {
    this.clickersService.removeClicker(id);
  }
}

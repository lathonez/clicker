import { Observable }  from 'rxjs/Observable';
import { Subject }     from 'rxjs/Subject';
import { Clicker }     from '../models';
import { ClickerMock } from '../models/mocks';

export class ClickersServiceMock {

  public doClick(): boolean {
    return true;
  }

  public newClicker(): boolean {
    return true;
  }

  public getClickers(): Array<string> {
    return [];
  }

  public isFetching(): boolean {
    return false;
  }

  public getData(): any {
    return Observable.create((observer: Subject<Clicker[]>) => {
      observer.next([(<Clicker>new ClickerMock())]);
    });
  }
}

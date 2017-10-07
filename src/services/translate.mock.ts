import {Observable} from 'rxjs';

export class TranslateServiceMock {
  public get(value: any): Observable<string> {
    return Observable.of(value);
  }
}

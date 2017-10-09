import {Observable} from 'rxjs';

export class TranslateServiceMock {

  public get(value: any): Observable<string> {
    return Observable.of(value);
  }

  /* tslint:disable */
  public use(value: any): void {}
  public set(lang: string): void {}
  public setDefaultLang(lang: string): void {}
 /* tslint:enable */
}

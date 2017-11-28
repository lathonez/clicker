import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export class TranslateServiceMock {

  public currentLang: string = 'en';

  public get(value: any): Observable<string> {
    return Observable.of(value);
  }

  public onLangChange: EventEmitter<string> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<string> = new EventEmitter();

  /* tslint:disable */
  public use(value: any): void {}
  public set(lang: string): void {}
  public setDefaultLang(lang: string): void {}
 /* tslint:enable */
}

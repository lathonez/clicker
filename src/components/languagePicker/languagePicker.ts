'use strict';

import { Component }        from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable }       from 'rxjs/Observable';

@Component({
  selector: 'language-picker',
  templateUrl: './languagePicker.html',
})

export class LanguagePicker {

  public language: string;
  private translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;

    // when this class is created, the langauge service will not have been initailised
    this.translate.onDefaultLangChange.subscribe((lang) => this.setDefaultLang(lang.lang));

    this.language = this.translate.currentLang; // may not be set ^
  }

  public setDefaultLang(lang: string): string {
    return this.language = lang;
  }

  public setLanguage(lang: string): Observable<any> {
    return this.translate.use(lang);
  }
}

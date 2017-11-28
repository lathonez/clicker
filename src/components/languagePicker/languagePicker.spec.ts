import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { LanguagePicker }          from './languagePicker';

let fixture: ComponentFixture<LanguagePicker> = null;
let instance: any = null;

describe('LanguagePicker', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([LanguagePicker]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises with language set', () => {
    expect(instance).not.toBeNull();
    expect(instance.language).toEqual('en');
  });

  it('subscribes to defaultLang', (done) => {

    spyOn(instance, 'setDefaultLang');

    let doneFn: Function = ((lang) => {
      expect(lang).toEqual({lang: 'TEST LANG'});
      expect(instance.setDefaultLang).toHaveBeenCalledWith('TEST LANG');
      done();
    });

    instance.translate.onDefaultLangChange.subscribe(doneFn);

    instance.translate.onDefaultLangChange.emit({lang: 'TEST LANG'});
  });

  it('sets the default lang', () => {
    instance.lang = null;
    instance.setDefaultLang('TEST LANG');
    expect(instance.language).toEqual('TEST LANG');
  });

  it('sets the lang', () => {
    spyOn(instance.translate, 'use');
    instance.setLanguage('TEST LANG');
    expect(instance.translate.use).toHaveBeenCalledWith('TEST LANG');
  });
});

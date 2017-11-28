import { ComponentFixture, async }    from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm, LanguagePicker } from '../../components';

let fixture: ComponentFixture<ClickerList> = null;
let instance: any = null;

describe('ClickerList', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ClickerList, ClickerForm, ClickerButton, LanguagePicker]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises', () => {
    expect(instance).toBeTruthy();
  });

  it('shows the app version', () => {
    instance.version = 'VERSION';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ion-footer').querySelector('.toolbar-content').innerHTML).toEqual('v.VERSION');
  });
});

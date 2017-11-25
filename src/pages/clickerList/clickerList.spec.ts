import { ComponentFixture, async }    from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm } from '../../components';

let fixture: ComponentFixture<ClickerList> = null;
let instance: any = null;

describe('ClickerList', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ClickerList, ClickerForm, ClickerButton]).then(compiled => {
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

  it('implements ngOnInit (cordova avail)', (done) => {
    spyOn(instance, 'getAppVersion').and.returnValue(Promise.resolve('TEST VERSION'));
    instance.ngOnInit()
      .then(() => {
        expect(instance.version).toEqual('TEST VERSION');
        done();
      });
  });

  it('implements ngOnInit (cordova unavail)', (done) => {
    spyOn(instance, 'getAppVersion').and.returnValue(Promise.reject('Cordova unavailable'));
    instance.ngOnInit()
      .then(() => {
        expect(instance.version).toEqual('DEVEL');
        done();
      });
  });
});

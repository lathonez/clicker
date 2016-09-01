import { beforeEach, beforeEachProviders, describe, expect, it }          from '@angular/core/testing';
import { provide }                                                        from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers, TestUtils } from '../../../test/diExports';
import { ClickersServiceMock }                                            from '../../services/mocks';
import { ClickersService, Utils }                                         from '../../services';
import { ClickerForm }                                                    from './clickerForm';
this.fixture = null;
this.instance = null;

let clickerFormProviders: Array<any> = [
  provide(ClickersService, {useClass: ClickersServiceMock}),
];

describe('ClickerForm', () => {

  let beforeEachFn: Function = ((testSpec) => {
    spyOn(testSpec.instance, 'newClickerLocal').and.callThrough();
  });

  beforeEachProviders(() => providers.concat(clickerFormProviders));
  beforeEach(injectAsyncWrapper(asyncCallbackFactory(ClickerForm, this, true, beforeEachFn)));

  it('initialises', () => {
    expect(this.fixture).not.toBeNull();
    expect(this.instance).not.toBeNull();
  });

  it('passes new clicker through to service', () => {
    let clickerName: string = 'dave';
    let input: any = this.fixture.nativeElement.querySelectorAll('.text-input')[0];
    let button: any = this.fixture.nativeElement.querySelectorAll('button')[1];
    spyOn(Utils, 'resetControl').and.callThrough();
    input.value = clickerName;
    TestUtils.eventFire(input, 'input');
    TestUtils.eventFire(button, 'click');
    expect(this.instance.newClickerLocal).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
    expect(Utils.resetControl).toHaveBeenCalledWith(this.instance.form.controls.clickerNameInput);
  });

  it('doesn\'t try to add a clicker with no name', () => {
    let button: any = this.fixture.nativeElement.querySelectorAll('button')[1];
    this.instance.clickerName = '';
    this.fixture.detectChanges();
    TestUtils.eventFire(button, 'click');
    expect(this.instance.newClickerLocal).toHaveBeenCalled();
  });
});

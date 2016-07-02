import { beforeEach, beforeEachProviders, describe, expect, it }          from '@angular/core/testing';
import { provide }                                                        from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers, TestUtils } from '../../../test/diExports';
import { ClickersMock }                                                   from '../../services/mocks';
import { Clickers, Utils }                                                from '../../services';
import { ClickerForm }                                                    from './clickerForm';

this.fixture = null;
this.instance = null;

let clickerFormProviders: Array<any> = [
 provide(Clickers, {useClass: ClickersMock}),
];

describe('ClickerForm', () => {

  let beforeEachFn: Function = ((testSpec) => {
    spyOn(testSpec.instance, 'newClicker').and.callThrough();
    spyOn(testSpec.instance['clickerService'], 'newClicker').and.callThrough();
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
    expect(this.instance.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
    expect(this.instance['clickerService'].newClicker).toHaveBeenCalledWith(clickerName);
    expect(Utils.resetControl).toHaveBeenCalledWith(this.instance['clickerNameInput']);
  });

  it('doesn\'t try to add a clicker with no name', () => {
    let button: any = this.fixture.nativeElement.querySelectorAll('button')[1];
    this.instance.clickerName = '';
    this.fixture.detectChanges();
    TestUtils.eventFire(button, 'click');
    expect(this.instance.newClicker).toHaveBeenCalled();
    expect(this.instance['clickerService'].newClicker).not.toHaveBeenCalled();
  });
});

import { beforeEach, beforeEachProviders, describe, expect, it }          from '@angular/core/testing';
import { provide }                                                        from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers, TestUtils } from '../../../test/diExports';
import { ClickersMock }                                                   from '../../services/mocks';
import { ClickerButton }                                                  from './clickerButton';
import { Clickers }                                                       from '../../services';

this.fixture = null;
this.instance = null;

let clickerButtonProviders: Array<any> = [
 provide(Clickers, {useClass: ClickersMock}),
];

describe('ClickerButton', () => {

  let beforeEachFn: Function = ((testSpec) => {
    testSpec.instance['clicker'] = { name: 'TEST CLICKER' };
    testSpec.instance['clicker'].getCount = function(): number { return 10; };
  });

  beforeEachProviders(() => providers.concat(clickerButtonProviders));
  beforeEach(injectAsyncWrapper(asyncCallbackFactory(ClickerButton, this, false, beforeEachFn)));

  it('initialises', () => {
    expect(this.instance).not.toBeNull();
  });

  it('displays the clicker name and count', () => {
    this.fixture.detectChanges();
    expect(this.fixture.nativeElement.querySelectorAll('.button-inner')[0].innerHTML).toEqual('TEST CLICKER (10)');
  });

  it('does a click', () => {
    this.fixture.detectChanges();
    spyOn(this.instance['clickerService'], 'doClick');
    TestUtils.eventFire(this.fixture.nativeElement.querySelectorAll('button')[0], 'click');
    expect(this.instance['clickerService'].doClick).toHaveBeenCalled();
  });
});

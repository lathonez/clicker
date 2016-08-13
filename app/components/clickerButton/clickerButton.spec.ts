import { beforeEach, beforeEachProviders, describe, expect, it }          from '@angular/core/testing';
import { provide }                                                        from '@angular/core';
import { asyncCallbackFactory, injectAsyncWrapper, providers, TestUtils } from '../../../test/diExports';
import { ClickersServiceMock }                                            from '../../services/mocks';
import { ClickerButton }                                                  from './clickerButton';
import { ClickersService }                                                from '../../services';
import {  TestComponentBuilder }     from '@angular/compiler/testing';
import {addProviders} from '@angular/core/testing';


this.fixture = null;
this.instance = null;

let clickerButtonProviders: Array<any> = [
 provide(ClickersService, {useClass: ClickersServiceMock}),
];

describe('ClickerButton', () => {

  let beforeEachFn: Function = ((testSpec) => {
    addProviders([{ provide: TestComponentBuilder, useClass: null }]);
    testSpec.instance['clicker'] = { name: 'TEST CLICKER' };
    testSpec.instance['clicker'].getCount = function (): number { return 10; };
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

  it('does a click', (done) => {
    this.fixture.detectChanges();
    this.instance.doClick.subscribe(done);
    TestUtils.eventFire(this.fixture.nativeElement.querySelectorAll('button')[0], 'click');
  });
});

import {
  beforeEach,
  beforeEachProviders,
  ComponentFixture,
  describe,
  expect,
  injectAsync,
  it,
  TestComponentBuilder,
}                        from 'angular2/testing';
import { provide }       from 'angular2/core';
import { Config }        from 'ionic-angular';
import { ClickerButton } from './clickerButton';
import { Clickers }      from '../../services/clickers';
import { TestUtils }     from '../../../test/testUtils';
import { Utils }         from '../../services/utils';

let clickerButton: ClickerButton = null;
let clickerButtonFixture: ComponentFixture = null;

class MockClickers {
  public doClick(): boolean {
    return true;
  }
}

class MockClicker {
  public name: string = 'TEST CLICKER';
  public getCount(): number { return 10; };
}

class MockClass {
  public get(): any {
    return {};
  }
}

export function main(): void {
  'use strict';

  describe('ClickerButton', () => {

    beforeEachProviders(() => [
      provide(Clickers, {useClass: MockClickers}),
      provide(Config, {useClass: MockClass}),
    ]);

    beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb
        .createAsync(ClickerButton)
        .then((componentFixture: ComponentFixture) => {
          clickerButtonFixture = componentFixture;
          clickerButton = componentFixture.componentInstance;
          clickerButton['clicker'] = { name: 'TEST CLICKER' };
          clickerButton['clicker'].getCount = function(): number { return 10; };
          window['fixture'] = clickerButtonFixture;
          window['testUtils'] = TestUtils;
        })
        .catch(Utils.promiseCatchHandler);
    }));

    it('initialises', () => {
      expect(clickerButton).not.toBeNull();
    });

    it('displays the clicker name and count', () => {
      clickerButtonFixture.detectChanges();
      expect(clickerButtonFixture.nativeElement.querySelectorAll('.button-inner')[0].innerHTML).toEqual('TEST CLICKER (10)');
    });

    it('does a click', () => {
      clickerButtonFixture.detectChanges();
      spyOn(clickerButton['clickerService'], 'doClick');
      TestUtils.eventFire(clickerButtonFixture.nativeElement.querySelectorAll('button')[0], 'click');
      expect(clickerButton['clickerService'].doClick).toHaveBeenCalled();
    });
  });
}

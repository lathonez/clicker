import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  injectAsync,
  it,
}                        from '@angular/core/testing';
import {
  ComponentFixture,
  TestComponentBuilder,
}                        from '@angular/compiler/testing';
import { provide }       from '@angular/core';
import { Config }        from 'ionic-angular';
import { ClickerButton } from './clickerButton';
import { Clickers }      from '../../services/clickers';
import { TestUtils }     from '../../../test/testUtils';
import { Utils }         from '../../services/utils';

let clickerButton: ClickerButton = null;
let clickerButtonFixture: ComponentFixture<ClickerButton> = null;

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

describe('ClickerButton', () => {

  beforeEachProviders(() => [
    provide(Clickers, {useClass: MockClickers}),
    provide(Config, {useClass: MockClass}),
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .createAsync(ClickerButton)
      .then((componentFixture: ComponentFixture<ClickerButton>) => {
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

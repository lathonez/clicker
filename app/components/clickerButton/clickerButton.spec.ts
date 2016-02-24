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
import { Config }        from 'ionic-framework/ionic';
import { ClickerButton } from '../../../app/components/clickerButton/clickerButton';
import { Clickers }      from '../../../app/services/clickers';
import { TestUtils }     from '../../testUtils';
import { Utils }         from '../../../app/services/utils';

let clickerButton = null;
let clickerButtonFixture = null;

class MockClickers {
  public doClick() {
    return true;
  }
}

class MockClicker {
  public name = 'TEST CLICKER';
  public getCount() { return 10; };
}

class MockClass {
  public get(): any {
    return {};
  }
}

export function main() {

  describe('ClickerForm', () => {

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
          clickerButton.clicker = {
            name: 'TEST CLICKER'
          };
          clickerButton.clicker.getCount = function() { return 10; };
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
      spyOn(clickerButton.clickerService, 'doClick');
      TestUtils.eventFire(clickerButtonFixture.nativeElement.querySelectorAll('button')[0], 'click');
      expect(clickerButton.clickerService.doClick).toHaveBeenCalled();
    });
  });
}

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
import {
  Config,
  Form,
  App,
  Platform,
}                        from 'ionic-angular';
import { ClickerForm }   from './clickerForm';
import { Clickers }      from '../../services/clickers';
import { TestUtils }     from '../../../test/testUtils';
import { Utils }         from '../../services/utils';

let clickerForm: ClickerForm = null;
let clickerFormFixture: ComponentFixture<ClickerForm> = null;

class MockClickers {
  public newClicker(): boolean {
    return true;
  }
}

class MockClass {
  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 42;
  }
}

describe('ClickerForm', () => {

  beforeEachProviders(() => [
    Form,
    provide(Clickers, {useClass: MockClickers}),
    provide(App, {useClass: MockClass}),
    provide(Platform, {useClass: MockClass}),
    provide(Config, {useClass: MockClass}),
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .createAsync(ClickerForm)
      .then((componentFixture: ComponentFixture<ClickerForm>) => {
        clickerFormFixture = componentFixture;
        clickerForm = componentFixture.componentInstance;
        spyOn(clickerForm, 'newClicker').and.callThrough();
        spyOn(clickerForm['clickerService'], 'newClicker').and.callThrough();
      })
      .catch(Utils.promiseCatchHandler);
  }));

  it('initialises', () => {
    expect(clickerForm).not.toBeNull();
  });

  it('passes new clicker through to service', () => {
    let clickerName: string = 'dave';
    let input: any = clickerFormFixture.nativeElement.querySelectorAll('.text-input')[0];
    let button: any = clickerFormFixture.nativeElement.querySelectorAll('button')[1];
    spyOn(Utils, 'resetControl').and.callThrough();
    input.value = clickerName;
    clickerFormFixture.detectChanges();
    clickerForm['clickerNameInput']['updateValue'](clickerName, true);
    TestUtils.eventFire(input, 'input');
    TestUtils.eventFire(button, 'click');
    expect(clickerForm.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
    expect(clickerForm['clickerService'].newClicker).toHaveBeenCalledWith(clickerName);
    expect(Utils.resetControl).toHaveBeenCalledWith(clickerForm['clickerNameInput']);
  });

  it('doesn\'t try to add a clicker with no name', () => {
    let button: any = clickerFormFixture.nativeElement.querySelectorAll('button')[1];
    TestUtils.eventFire(button, 'click');
    expect(clickerForm.newClicker).toHaveBeenCalled();
    expect(clickerForm['clickerService'].newClicker).not.toHaveBeenCalled();
  });
});

import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test-utils';
import { ClickerButton }           from './clickerButton';
import { ClickerMock }             from '../../models/clicker.mock';

let fixture: ComponentFixture<ClickerButton> = null;
let instance: any = null;

describe('ClickerButton', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ClickerButton]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    instance.clicker = new ClickerMock();
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises', () => {
    expect(instance).not.toBeNull();
  });

  it('displays the clicker name and count', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.button-inner')[0].innerHTML).toEqual('TEST CLICKER (10)');
  });

  it('does a click', async(() => {
    spyOn(instance['clickerService'], 'doClick');
    let button: any = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(instance['clickerService'].doClick).toHaveBeenCalled();
    });
  }));
});

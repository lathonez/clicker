import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtils }                 from '../../test';
import { ClickerButton }                                                  from './clickerButton';

let fixture: ComponentFixture<ClickerButton> = null;
let instance: any = null;

describe('ClickerButton', () => {

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerButton);
    instance = fixture.debugElement.componentInstance;
    instance.clicker = { name: 'TEST CLICKER' };
    instance.clicker.getCount = function(): number { return 10; };
  });

  it('initialises', () => {
    expect(instance).not.toBeNull();
  });

  it('displays the clicker name and count', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.button-inner')[0].innerHTML).toEqual('TEST CLICKER (10)');
  });

  it('does a click', () => {
    fixture.detectChanges();
    spyOn(instance['clickerService'], 'doClick');
    TestUtils.eventFire(fixture.nativeElement.querySelectorAll('button')[0], 'click');
    expect(instance['clickerService'].doClick).toHaveBeenCalled();
  });
});

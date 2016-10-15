import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtils }                 from '../../test';
import { ClickerForm }               from './clickerForm';

let fixture: ComponentFixture<ClickerForm> = null;
let instance: any = null;

describe('ClickerForm', () => {

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerForm);
    instance = fixture.debugElement.componentInstance;
    instance.clicker = { name: 'TEST CLICKER' };
    instance.clicker.getCount = function(): number { return 10; };
  });

  it('initialises', () => {
    expect(fixture).not.toBeNull();
    expect(instance).not.toBeNull();
  });

  it('passes new clicker through to service', () => {
    let clickerName: string = 'dave';
    let input: any = fixture.nativeElement.querySelectorAll('.text-input')[0];
    let button: any = fixture.nativeElement.querySelectorAll('button')[1];
    input.value = clickerName;
    TestUtils.eventFire(input, 'input');
    TestUtils.eventFire(button, 'click');
    expect(instance.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
    expect(instance['clickerService'].newClicker).toHaveBeenCalledWith(clickerName);
  });

  it('doesn\'t try to add a clicker with no name', () => {
    let button: any = fixture.nativeElement.querySelectorAll('button')[1];
    instance.clickerName = '';
    fixture.detectChanges();
    TestUtils.eventFire(button, 'click');
    expect(instance.newClicker).toHaveBeenCalled();
    expect(instance['clickerService'].newClicker).not.toHaveBeenCalled();
  });
});

import { ComponentFixture, TestBed }  from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm } from '../../components';

let fixture: ComponentFixture<ClickerList> = null;
let instance: any = null;

describe('ClickerList', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule([ClickerList, ClickerForm, ClickerButton]);
    fixture = TestBed.createComponent(ClickerList);
    instance = fixture.debugElement.componentInstance;
  });

  it('initialises', () => {
    expect(instance).toBeTruthy();
  });
});

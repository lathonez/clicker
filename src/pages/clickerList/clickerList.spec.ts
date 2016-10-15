import { ComponentFixture, TestBed }  from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm } from '../../components';

describe('ClickerList', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule([ClickerList, ClickerForm, ClickerButton]);
  });

  it('initialises', () => {
    let fixture: ComponentFixture<ClickerList> = TestBed.createComponent(ClickerList);
    let instance: any = fixture.debugElement.componentInstance;
    expect(instance).toBeTruthy();
  });
});

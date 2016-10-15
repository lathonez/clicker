import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtils }                 from '../../test';
import { ClickerList }               from './clickerList';

describe('ClickerList', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule(ClickerList);
  });

  it('initialises', () => {
    let fixture: ComponentFixture<ClickerList> = TestBed.createComponent(ClickerList);
    let instance: any = fixture.debugElement.componentInstance;
    expect(instance).toBeTruthy();
  });
});

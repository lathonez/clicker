import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestUtils }                        from '../../test';
import { ClickerList }                      from './clickerList';
import { ClickerButton, ClickerForm }       from '../../components';

let fixture: ComponentFixture<ClickerList> = null;
let instance: any = null;

describe('ClickerList', () => {

  beforeEach(async(() => {
    return TestUtils.configureIonicTestingModule([ClickerList, ClickerForm, ClickerButton])
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ClickerList);
        instance = fixture.debugElement.componentInstance;
      });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises', () => {
    expect(instance).toBeTruthy();
  });
});

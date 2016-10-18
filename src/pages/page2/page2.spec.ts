import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestUtils }                        from '../../test';
import { Page2 }                            from './page2';

let fixture: ComponentFixture<Page2> = null;
let instance: any = null;

describe('Pages: Page2', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule([Page2]);
    fixture = TestBed.createComponent(Page2);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create page2', async(() => {
    expect(instance).toBeTruthy();
  }));
});

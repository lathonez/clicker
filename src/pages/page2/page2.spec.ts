import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestUtils } from '../../test';

import { Page2 } from './page2';

describe('Pages: Page2', () => {
  beforeEach(() => {
    TestUtils.configureIonicTestingModule(Page2);
  });

  it('should create page2', async(() => {
    let fixture: ComponentFixture<Page2> = TestBed.createComponent(Page2);
    let instance: any = fixture.debugElement.componentInstance;
    expect(instance).toBeTruthy();
  }));
});

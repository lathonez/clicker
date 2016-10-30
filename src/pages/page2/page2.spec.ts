import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestUtils }                        from '../../test';
import { Page2 }                            from './page2';

let fixture: ComponentFixture<Page2> = null;
let instance: any = null;

describe('Pages: Page2', () => {

  beforeEach(async(() => {
    return TestUtils.configureIonicTestingModule([Page2])
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(Page2);
        instance = fixture.debugElement.componentInstance;
        fixture.detectChanges();
      });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create page2', () => {
    expect(fixture).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});

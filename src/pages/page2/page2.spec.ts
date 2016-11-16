import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { Page2 }                   from './page2';

let fixture: ComponentFixture<Page2> = null;
let instance: any = null;

describe('Pages: Page2', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([Page2]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create page2', () => {
    expect(fixture).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});

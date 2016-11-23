import { ComponentFixture, async }    from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm } from '../../components';
import { ClickersServiceMock } from '../../services/clickers.mock';
import { ClickersService } from '../../services';

let fixture: ComponentFixture<ClickerList> = null;
let instance: any = null;

describe('ClickerList', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ClickerList, ClickerForm, ClickerButton], [
    {provide: ClickersService, useClass: ClickersServiceMock}
    ]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges();
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises', () => {
    expect(instance).toBeTruthy();
  });
});

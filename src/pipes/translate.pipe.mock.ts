import { Pipe } from '@angular/core';

@Pipe({name: 'translate'})
export class TranslatePipeMock {
  public transform(): string {
    return '';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translate'})
export class TranslatePipeMock implements PipeTransform {
  public transform(): string {
    return '';
  }
}

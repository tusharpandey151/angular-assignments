import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    const arrayString:string []= value.split('');
    return arrayString.reverse().join('');
  }

}

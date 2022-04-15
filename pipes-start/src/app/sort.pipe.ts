import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [], prop:string): [] {
    value.sort((a, b)=> {
      if(a[prop]>b[prop]) {
        return 1;
      }
      else if (a[prop]==b[prop]) {
        return 0
      }
      else {
        return -1;
      }
      
    });
    return value;
  }

}

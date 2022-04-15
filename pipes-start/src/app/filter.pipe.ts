import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName:string): any {
    if(value.length === 0) {
      return value;
    }
    if(filterString == null || filterString =='') {
       return value;
    }
      const resultArray = []
      for(const item of value) {
        
        if((<string>item[propName]).startsWith(filterString)) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }

}

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'boolType'
})
export class BoolTypePipe implements PipeTransform {
  transform(value: boolean): string {
    let rc = ''
    if (value !== true) {
      rc = '是'
    } else {
      rc = '否'
    }
    return rc
  }
}

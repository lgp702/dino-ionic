import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'resourceType'
})
export class ResourceTypePipe implements PipeTransform {
  transform(value: string): string {
    let rc = ''
    if (value !== '') {
      switch (value) {
        case '1':
          rc = '线上赞助'
          break

        case '2':
          rc = '线下赞助'
          break
      }
    }
    return rc
  }
}

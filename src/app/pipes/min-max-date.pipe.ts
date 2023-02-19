import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minMaxDate',
  pure: true,
  standalone: true
})
export class MinMaxDatePipe implements PipeTransform {
  transform(value: string | undefined, arg: string): string | null {
    if (value) {
      const adjustmentFactor = arg === 'max' ? -1 : 1;
      return new Date(new Date().setDate(new Date(value).getDate() + adjustmentFactor)).toISOString().split(("T"))[0];
    }
    return null;
  }
}

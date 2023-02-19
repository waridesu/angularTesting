import { FormControl } from "@angular/forms";

export interface Home {
  title: string,
  image: string,
  location: string,
  perNight: number,
}

export interface DialogForm {
  houseName: FormControl<string>
  perNight: FormControl<number>
  checkin: FormControl<string>
  checkout: FormControl<string>
  total: FormControl<number>
}

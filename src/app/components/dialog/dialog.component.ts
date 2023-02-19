import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DialogForm, Home } from "../../interface/project-interface";
import { NgIf } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MinMaxDatePipe } from "../../pipes/min-max-date.pipe";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [
    NgIf,
    ReactiveFormsModule,
    MinMaxDatePipe,
  ],
  standalone: true
})
export class DialogComponent implements OnInit{
  @ViewChild('dialog') modal: ElementRef | undefined;
  @Input() home: Home | undefined;
  checkinForm: FormGroup<DialogForm> | undefined;
  constructor() {}
  ngOnInit() {
    this.initCheckinForm();
  }

  private initCheckinForm() {
    this.checkinForm = new FormGroup<DialogForm>({
      houseName: new FormControl(this.home?.title ? this.home?.title : '', { nonNullable: true }),
      perNight: new FormControl(this.home?.perNight ? this.home?.perNight : 0, { nonNullable: true }),
      checkin: new FormControl('', { nonNullable: true }),
      checkout: new FormControl('', { nonNullable: true }),
      total: new FormControl(0, { nonNullable: true }),
    });
  }

  toggleDialog(isOpen: boolean, home?: Home | undefined) {
    if(home) {
      console.log('sendRequest');
    } else {
      this.modal?.nativeElement[isOpen ? 'show' : 'close']()
    }
  }
  currentMinDate(): string {
    return new Date().toISOString().split(("T"))[0]
  }
  setTotalValue() {
    if (this.checkinForm && this.checkinForm.controls.checkin.value && this.checkinForm.controls.checkout.value) {
      const inDate = new Date(this.checkinForm.controls.checkin.value);
      const outDate = new Date(this.checkinForm.controls.checkout.value);
      console.log((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24));
      this.checkinForm.controls.total.setValue( this.checkinForm.controls.perNight.value * ((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24)) )
    }
  }
}


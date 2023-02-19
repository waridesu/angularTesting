import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MinMaxDatePipe } from "../../pipes/min-max-date.pipe";

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MinMaxDatePipe, DialogComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the checkin form', () => {
    component.home = {
      title: 'Home 1',
      image: 'https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0',
      location: 'new york',
      perNight: 100,
    };
    component.ngOnInit();

    expect(component.checkinForm?.value).toEqual({
      houseName: 'Home 1',
      perNight: 100,
      checkin: '',
      checkout: '',
      total: 0
    });
  });

  it('should calculate the total price', () => {
    component.checkinForm?.setValue({
      houseName: 'Home 1',
      perNight: 100,
      checkin: '2023-02-20',
      checkout: '2023-02-22',
      total: 200
    });

    component.setTotalValue();

    expect(component.checkinForm?.value.total).toBe(200);
  });

  it('should toggle the dialog', () => {
    component.home = {
      title: 'Home 1',
      image: 'https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0',
      location: 'new york',
      perNight: 100,
    };

    const modalSpy = jasmine.createSpyObj('modal', ['show', 'close']);
    component.modal = { nativeElement: modalSpy };

    component.toggleDialog(true);

    expect(modalSpy.show).toHaveBeenCalled();

    component.toggleDialog(false);

    expect(modalSpy.close).toHaveBeenCalled();
  });
});

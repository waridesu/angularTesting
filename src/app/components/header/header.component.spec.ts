import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  it('should show search', () => {
    expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy();
  });

  it('should show menu', () => {
    expect(fixture.nativeElement.querySelector('[data-test="menu"]')).toBeTruthy();
  });

  it('should show filter', () => {
    expect(fixture.nativeElement.querySelector('[data-test="filter"]')).toBeTruthy();
  });
});

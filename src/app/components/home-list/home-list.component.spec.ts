import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeListComponent } from './home-list.component';
import { DataService } from "../../services/data/data.service";
import { of } from "rxjs";

describe('HomesComponent', () => {
  let component: HomeListComponent;
  let fixture: ComponentFixture<HomeListComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeListComponent],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get homes', () => {
    const homes = [
      {
        title: 'Home 1',
        image: 'https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0',
        location: 'new york',
        perNight: 100,
      }, {
        title: 'Home 2',
        image: 'https://fastly.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM',
        location: 'new york',
        perNight: 200,
      }, {
        title: 'Home 3',
        image: 'https://fastly.picsum.photos/id/227/200/200.jpg?hmac=_HAD3ZQuIUMd1tjQfU5i21RCLHRDH_r_Xuq0q6iRN-o',
        location: 'new york',
        perNight: 300,
      }];

    spyOn(dataService, 'getHomes$').and.returnValue(of(homes));
    fixture.detectChanges();

    const homesElements = fixture.nativeElement.querySelectorAll('[data-test="home"]');
    expect(homesElements.length).toEqual(3);

    homes.forEach((home, i) => {
      const el = homesElements[i];

      expect(el.querySelector('h3').textContent).toEqual(home.title);
      expect(el.querySelector('img').getAttribute('src')).toEqual(home.image);
      expect(el.querySelector('p').textContent).toEqual(home.location);
      expect(el.querySelector('[data-test="book-btn"]')).toBeTruthy();
    });
  });
});

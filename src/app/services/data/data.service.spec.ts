import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return homes', () => {
    const homes = service.getHomes$();
    expect(homes).toBeTruthy();
  });

  it('should return list of homes', () => {
    const homesMock = [
      {
        title: 'Home 1',
        image: 'https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0',
        location: 'new york',
        perNight: 100,
      },
      {
        title: 'Home 2',
        image: 'https://fastly.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM',
        location: 'new york',
        perNight: 200,
      },
      {
        title: 'Home 3',
        image: 'https://fastly.picsum.photos/id/227/200/200.jpg?hmac=_HAD3ZQuIUMd1tjQfU5i21RCLHRDH_r_Xuq0q6iRN-o',
        location: 'new york',
        perNight: 300,
      }
    ];

    service.getHomes$().subscribe(data => {
      expect(data).toEqual(homesMock);
    });
  });
});

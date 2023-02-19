import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Home } from "../../interface/project-interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHomes$(): Observable<Home[]> {
    return of([
      {
        title: 'Home 1',
        image: 'https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0',
        location: 'new york',
        perNight: 100
      },
      {
        title: 'Home 2',
        image: 'https://fastly.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM',
        location: 'new york',
        perNight: 200
      },
      {
        title: 'Home 3',
        image: 'https://fastly.picsum.photos/id/227/200/200.jpg?hmac=_HAD3ZQuIUMd1tjQfU5i21RCLHRDH_r_Xuq0q6iRN-o',
        location: 'new york',
        perNight: 300
      }
    ])
  }
}

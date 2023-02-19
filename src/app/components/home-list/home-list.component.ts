import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Home } from "../../interface/project-interface";
import { DataService } from "../../services/data/data.service";
import { AsyncPipe, NgForOf } from "@angular/common";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
  imports: [
    AsyncPipe,
    NgForOf,
    DialogComponent
  ],
  standalone: true
})
export class HomeListComponent implements OnInit {
  homes$: Observable<Home[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }
}

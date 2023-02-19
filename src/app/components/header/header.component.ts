import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  changeBorderColor(event: MouseEvent) {
    const x = event.pageX - (event.target as HTMLElement).offsetLeft;
    const y = event.pageY - (event.target as HTMLElement).offsetTop

    this.render.setProperty(event.target, 'style', `--x:${ x }px; --y:${ y }px;`)
  }
}

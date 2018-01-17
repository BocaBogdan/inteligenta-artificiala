import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-b2-page',
  templateUrl: './b2-page.component.html'
})
export class B2PageComponent implements OnInit {

  constructor() {
    this.scrollUp();
  }

  ngOnInit() {
  }

  private scrollUp() {
    window.scrollTo(0, 0);
  }
}

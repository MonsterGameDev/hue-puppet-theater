import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: ` <h1>404 - Page Not Found</h1> `,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

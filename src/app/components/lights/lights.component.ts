import { Component, Input, OnInit } from '@angular/core';
import { Light } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {
  @Input() lights?: Light[];

  constructor() {}

  ngOnInit(): void {}
}

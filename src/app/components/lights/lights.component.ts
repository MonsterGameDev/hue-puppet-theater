import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupsLoadAction } from 'src/app/+state/groups/groups.actions';
import { AppState, Light } from 'src/app/+state/state.interfaces';
import { vmLight } from 'src/app/models/ui-interfaces';
import { HttpService } from 'src/app/services/http.service';
import * as lightActions from './../../+state/lights/lights.actions';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {
  @Input() lights?: Light[];


  constructor(
    private httpService: HttpService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {


    

  }
}

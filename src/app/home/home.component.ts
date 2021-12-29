import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupsLoadAction } from '../+state/groups/groups.actions';
import { lightsLoadAction } from '../+state/lights/lights.actions';
import { AppState } from '../+state/state.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(lightsLoadAction());
    this.store.dispatch(groupsLoadAction());
  }

}

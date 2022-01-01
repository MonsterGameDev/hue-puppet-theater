import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupsLoadAction } from '../+state/groups/groups.actions';
import { getSelectedGroupAction } from '../+state/groups/groups.selectors';
import { lightsLoadAction } from '../+state/lights/lights.actions';
import { Action, AppState } from '../+state/state.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  action?: Action;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(lightsLoadAction());
    this.store.dispatch(groupsLoadAction());

    this.store.select(getSelectedGroupAction).subscribe((data?: Action) => {
      this.action = data;
    });
  }

  loadGroups(): void {
    this.store.dispatch(groupsLoadAction());
  }

  
}

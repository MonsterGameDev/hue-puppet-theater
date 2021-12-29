import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectAllRooms } from 'src/app/+state/groups/groups.selectors';
import { AppState, Group } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups?: Group[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectAllRooms).subscribe(
      (data: Group[]) => this.groups = data,
    );



  }


}

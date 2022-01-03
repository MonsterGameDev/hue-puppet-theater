import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupsLoadAction } from '../+state/groups/groups.actions';
import {
  getSelectedGroup,
  getSelectedGroupAction,
} from '../+state/groups/groups.selectors';
import { lightsLoadAction } from '../+state/lights/lights.actions';
import { addSequenceItemAction } from '../+state/sequence/sequence.actions';
import { SequenceItem, TimeStamp } from '../+state/sequence/sequence.interface';
import { selectSequence } from '../+state/sequence/sequence.selector';
import {
  Action,
  AppState,
  Group,
  GroupActionUpdate,
  GroupActionUpdateRequest,
} from '../+state/state.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  group?: Group;
  action?: Action;
  showCreateSequenceForm: boolean = false;
  sequenceName: string = '';
  stampHour: string = '00';
  stampMinute: string = '00';
  stampSecond: string = '00';
  lightFlow: SequenceItem[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(lightsLoadAction());
    this.store.dispatch(groupsLoadAction());

    this.store.select(getSelectedGroup).subscribe((data?: Group) => {
      this.group = data;
    });
    this.store.select(selectSequence).subscribe((data: SequenceItem[]) => {
      console.log(data);

      this.lightFlow = data;
    });
  }

  loadGroups(): void {
    this.store.dispatch(groupsLoadAction());
  }

  saveAction(): void {
    const name = this.sequenceName;

    const timeStamp: TimeStamp = { hh: '00', mm: '00', ss: '00' };
    const payload: GroupActionUpdate[] = [
      {
        id: this.group?.id || '00',
        body: (this.group?.action as GroupActionUpdateRequest) || undefined,
      },
    ];
    this.store.dispatch(
      addSequenceItemAction({
        payload: {
          sequenceName: name || '',
          startTime: timeStamp,
          groupActionArray: payload,
        },
      })
    );
  }

  createSequence() {
    this.showCreateSequenceForm = true;
  }

  saveNewSequenceItem() {
    let payload: SequenceItem = {
      sequenceName: this.sequenceName,
      startTime: {
        hh: this.stampHour,
        mm: this.stampMinute,
        ss: this.stampSecond,
      },
      groupActionArray: [],
    };

    this.store.dispatch(addSequenceItemAction({ payload }));
  }
}

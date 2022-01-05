import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupSelectedAction } from 'src/app/+state/groups/groups.actions';
import { selectAllLights } from 'src/app/+state/lights/lights.selectors';
import {
  addGroupActionToActionArray,
  removeGroupActionFromActionArray,
} from 'src/app/+state/sequence/sequence.actions';
import { getSelectedSequence } from 'src/app/+state/sequence/sequence.selector';
import {
  Action,
  AppState,
  Group,
  GroupActionUpdate,
  GroupActionUpdateRequest,
  Light,
} from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() group?: Group;
  @Output() actionEmitter? = new EventEmitter<Action>();
  lightIds?: string[];
  lights?: Light[];
  action?: Action;
  selectedSequenceName?: string;
  checkboxGroupValue = false;

  groupSelected: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.lightIds = this.group?.lights;
    this.store.select(selectAllLights).subscribe((lights: Light[]) => {
      this.lights = lights.filter((light: Light) => {
        return this.lightIds?.includes(light.id);
      });
    });
    this.store
      .select(getSelectedSequence)
      .subscribe((data) =>{
        if (data)
        this.selectedSequenceName = data;






        });
  }

  groupClickHandler(e: any) {
    if (!this.group || !this.selectedSequenceName) return;

    this.checkboxGroupValue = !this.checkboxGroupValue;

    if (this.checkboxGroupValue) {
      const sequenceName = this.selectedSequenceName;
      const groupActionUpdate: GroupActionUpdate = {
        id: this.group.id,
        body: this.group.action as GroupActionUpdateRequest,
      };
      const payload = { sequenceName, groupActionUpdate };

      this.store.dispatch(addGroupActionToActionArray({ payload }));
    } else {
      const payload = {
        selectedSequence: this.selectedSequenceName,
        groupId: this.group.id,
      };
      this.store.dispatch(removeGroupActionFromActionArray({ payload }));
    }
  }
}

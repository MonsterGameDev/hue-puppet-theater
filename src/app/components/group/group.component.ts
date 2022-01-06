import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllLights } from 'src/app/+state/lights/lights.selectors';
import {
  addGroupActionToActionArray,
  removeGroupActionFromActionArray,
} from 'src/app/+state/sequence/sequence.actions';
import { SequenceItem } from 'src/app/+state/sequence/sequence.interface';
import { getSelectedSequence } from 'src/app/+state/sequence/sequence.selector';
import {
  Action,
  AppState,
  Group,
  GroupActionUpdate,
  GroupActionUpdateRequest,
  Light,
} from 'src/app/+state/state.interfaces';

//import { SequenceItem } from 'src/app/+state/sequence/sequence.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() group!: Group;
  @Output() actionEmitter? = new EventEmitter<Action>();

  constructor(private store: Store<AppState>) {}

  //From State
  lightIds!: string[];
  lights!: Light[];
  action?: Action;
  selectedSequenceName?: string;
  sequenceArray?: SequenceItem[];
  isChecked = false;

  ngOnInit(): void {
    // Finding lights in grup
    this.lightIds = this.group?.lights;
    this.store.select(selectAllLights).subscribe((lights: Light[]) => {
      this.lights = lights.filter((light: Light) => {
        return this.lightIds?.includes(light.id);
      });
    });

    this.store.select(getSelectedSequence).subscribe((data) => {
      this.selectedSequenceName = data?.sequenceName;
      this.isChecked = false;
      console.log(this.isChecked);

      data?.groupActionArray.forEach((action: GroupActionUpdate) => {
        if (action.id === this.group?.id) {
          this.isChecked = true;
        }
      });
    });
  }

  groupSelectedStateChanged(e: any) {
    // return if nothing is selected
    if (!this.selectedSequenceName || !this.group) return;

    if (e.currentTarget.checked) {
      const sequenceName: string = this.selectedSequenceName;

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

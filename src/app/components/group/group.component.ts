import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupSelectedAction } from 'src/app/+state/groups/groups.actions';
import { getSelectedGroupAction } from 'src/app/+state/groups/groups.selectors';
import { selectAllLights } from 'src/app/+state/lights/lights.selectors';
import { Action, AppState, Group, Light } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() group?: Group;
  @Output() actionEmitter?= new EventEmitter<Action>();
  lightIds?: string[];
  lights?: Light[];
  action?: Action;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.lightIds = this.group?.lights;
    this.store.select(selectAllLights).subscribe((lights: Light[]) => {
      this.lights = lights.filter((light: Light) => {
        return this.lightIds?.includes(light.id);
      });
    });
  }

  groupClickHandler(e: any) {
    e.stopPropagation();
    if (this.group?.id)
      this.store.dispatch(groupSelectedAction({ body: this.group?.id}))
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllLights } from 'src/app/+state/lights/lights.selectors';
import { AppState, Group, Light } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() group?: Group;
  lightIds?: string[];
  lights?: Light[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.lightIds = this.group?.lights;
    console.log('lightIds: ', this.lightIds);

    this.store.select(selectAllLights).subscribe((lights: Light[]) => {
      this.lights = lights.filter((light: Light) => {
        return this.lightIds?.includes(light.id);
      });
      console.log('Lights. ', this.lights);
    });
  }
}

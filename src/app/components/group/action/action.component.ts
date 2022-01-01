import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LightEffects } from 'src/app/+state/lights/lights.effects';
import { Action } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit, OnChanges {
  @Input() action?: Action;
  actionKeyValue?: { prop: string; value: any }[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.action) {
      this.readyActionList(changes.action.currentValue);
    }
  }

  readyActionList(action: Action): void {
    let key: keyof Action;
    this.actionKeyValue = [];

    for (key in action) {
      console.log(`${key} - ${action[key]}`);
      let itemLine = {
        prop: key,
        value: action[key],
      };

      // setting value for template-loop
      this.actionKeyValue.push(itemLine);
    }
  }
}

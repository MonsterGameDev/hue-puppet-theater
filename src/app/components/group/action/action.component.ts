import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Action, Group } from 'src/app/+state/state.interfaces';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit, OnChanges {
  @Input() group?: Group;
  actionKeyValue?: { prop: string; value: any }[];
  groupName?: string;

  constructor() {}

  ngOnInit(): void {
    // console.log('group: ', this.group);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.group) {
      this.readyActionList(changes.group.currentValue);
    }
  }

  readyActionList(group: Group): void {
    const action = group.action;
    this.groupName = group.name;

    let key: keyof Action;
    this.actionKeyValue = [];

    for (key in action) {
      let itemLine = {
        prop: key,
        value: action[key],
      };

      // setting value for template-loop
      this.actionKeyValue.push(itemLine);
    }
  }
}

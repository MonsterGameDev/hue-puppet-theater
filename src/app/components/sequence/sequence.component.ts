import { Component, Input, OnInit } from '@angular/core';
import { SequenceItem } from 'src/app/+state/sequence/sequence.interface';
import { Store } from '@ngrx/store';
import { setSelectedSequenceItem } from 'src/app/+state/sequence/sequence.actions';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss'],
})
export class SequenceComponent implements OnInit {
  @Input() lightFlow?: SequenceItem[];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  editSequenceItem(name: string) {
    this.store.dispatch(setSelectedSequenceItem({ payload: name }));
  }

  deleteSequenceItem(name: string) {
    console.log('Delete SequenceItem');

  }

  addGroup() {
    console.log('Add Group Clicked');

  }

  addBulp() {
    console.log('Add Bulp Clicked');

  }

  //  createSequenceItem() {}
}

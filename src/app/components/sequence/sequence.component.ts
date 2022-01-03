import { Component, Input, OnInit } from '@angular/core';
import { SequenceItem } from 'src/app/+state/sequence/sequence.interface';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {
  @Input() lightFlow?: SequenceItem[];
  constructor() { }

  ngOnInit(): void {
  }

}

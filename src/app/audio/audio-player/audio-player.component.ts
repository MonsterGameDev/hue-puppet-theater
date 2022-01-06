import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSequenceItemAction } from 'src/app/+state/sequence/sequence.actions';
import {
  SequenceItem,
  TimeStamp,
} from 'src/app/+state/sequence/sequence.interface';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  sec: string = '00';
  min: string = '00';
  hrs: string = '00';
  btnText: string = '';
  currentTime: number = 0;
  timeStamp!: TimeStamp;
  sequenceName: string = '';
  showForm: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const audio: any = document.querySelector('audio');

    this.setButtonText(audio);

    audio.ontimeupdate = (event: any) => {
      this.currentTime = audio.currentTime;

      const s = Math.floor(this.currentTime) % 60;
      const m = Math.floor(this.currentTime / 60) % 60;
      const h = Math.floor(this.currentTime / 60 / 60) % 60;

      this.sec = s < 10 ? '0' + s : s.toString();
      this.min = m < 10 ? '0' + m : m.toString();
      this.hrs = h < 10 ? '0' + h : h.toString();

      this.timeStamp = { hh: this.hrs, mm: this.min, ss: this.sec };
    };
  }

  setTimeStamp() {
    //Play/Set Timestamp button clicked
    const audio: any = document.querySelector('audio');
    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setButtonText(audio);
    this.showForm = audio.paused;
  }

  setButtonText(audio: any) {
    if (!audio.paused) {
      this.btnText = 'Set TimeStamp';
    } else {
      this.btnText = 'Play';
    }
  }

  createSequence() {
    let payload: SequenceItem = {
      sequenceName: this.sequenceName,
      startTime: this.timeStamp,
      groupActionArray: [],
    };

    this.store.dispatch(addSequenceItemAction({ payload }));

    this.sequenceName = '';
    this.showForm = false;
  }

  startFlow() {
    
  }
}

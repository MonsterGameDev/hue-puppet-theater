import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { groupUpdateAction } from 'src/app/+state/groups/groups.actions';
import { addSequenceItemAction } from 'src/app/+state/sequence/sequence.actions';
import {
  SequenceItem,
  TimeStamp,
} from 'src/app/+state/sequence/sequence.interface';
import { getAllSequences } from 'src/app/+state/sequence/sequence.selector';
import {
  AppState,
  GroupActionUpdate,
  GroupActionUpdateRequest,
} from 'src/app/+state/state.interfaces';
import { FlowService } from 'src/app/services/flow-service.service';

const FLOW: SequenceItem[] = [
  {
    sequenceName: 'Sequence 1',
    startTime: {
      hh: '00',
      mm: '00',
      ss: '05',
    },
    groupActionArray: [
      {
        id: '2',
        body: {
          on: true,
          bri: 122,
          hue: 8339,
          sat: 148,
          effect: 'none',
          xy: [0.4627, 0.4112],
          ct: 372,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '3',
        body: {
          on: true,
          bri: 108,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.3401, 0.3516],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '4',
        body: {
          on: true,
          bri: 113,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.3401, 0.3516],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '5',
        body: {
          on: true,
          bri: 254,
          hue: 41203,
          sat: 96,
          effect: 'none',
          xy: [0.2963, 0.32],
          ct: 153,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '6',
        body: {
          on: false,
          bri: 1,
          hue: 8410,
          sat: 140,
          effect: 'none',
          xy: [0.4574, 0.41],
          ct: 366,
          alert: 'select',
          colormode: 'xy',
        },
      },
    ],
  },
  {
    sequenceName: 'Sequence 2',
    startTime: {
      hh: '00',
      mm: '00',
      ss: '15',
    },
    groupActionArray: [
      {
        id: '2',
        body: {
          on: false,
          bri: 122,
          hue: 8339,
          sat: 148,
          effect: 'none',
          xy: [0.4627, 0.4112],
          ct: 372,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '3',
        body: {
          on: true,
          bri: 37,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.428, 0.3431],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '4',
        body: {
          on: true,
          bri: 182,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.602, 0.3718],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '5',
        body: {
          on: false,
          bri: 254,
          hue: 41203,
          sat: 96,
          effect: 'none',
          xy: [0.2963, 0.32],
          ct: 153,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '6',
        body: {
          on: true,
          bri: 74,
          hue: 8410,
          sat: 140,
          effect: 'none',
          xy: [0.4328, 0.4417],
          ct: 366,
          alert: 'select',
          colormode: 'xy',
        },
      },
    ],
  },
  {
    sequenceName: 'sequence 3',
    startTime: {
      hh: '00',
      mm: '00',
      ss: '25',
    },
    groupActionArray: [
      {
        id: '2',
        body: {
          on: false,
          bri: 122,
          hue: 8339,
          sat: 148,
          effect: 'none',
          xy: [0.4627, 0.4112],
          ct: 372,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '3',
        body: {
          on: true,
          bri: 37,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.428, 0.3431],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '4',
        body: {
          on: true,
          bri: 182,
          hue: 40842,
          sat: 46,
          effect: 'none',
          xy: [0.602, 0.3718],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '5',
        body: {
          on: false,
          bri: 254,
          hue: 41203,
          sat: 96,
          effect: 'none',
          xy: [0.2963, 0.32],
          ct: 153,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '6',
        body: {
          on: true,
          bri: 74,
          hue: 8410,
          sat: 140,
          effect: 'none',
          xy: [0.4328, 0.4417],
          ct: 366,
          alert: 'select',
          colormode: 'xy',
        },
      },
    ],
  },
  {
    sequenceName: 'Sequence 4',
    startTime: {
      hh: '00',
      mm: '00',
      ss: '35',
    },
    groupActionArray: [
      {
        id: '2',
        body: {
          on: true,
          bri: 122,
          hue: 8339,
          sat: 148,
          effect: 'none',
          xy: [0.4626, 0.4112],
          ct: 375,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '3',
        body: {
          on: true,
          bri: 108,
          hue: 44271,
          sat: 254,
          effect: 'none',
          xy: [0.3397, 0.3513],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '4',
        body: {
          on: true,
          bri: 113,
          hue: 44271,
          sat: 254,
          effect: 'none',
          xy: [0.3397, 0.3513],
          ct: 192,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '5',
        body: {
          on: true,
          bri: 254,
          hue: 41203,
          sat: 96,
          effect: 'none',
          xy: [0.2961, 0.3199],
          ct: 153,
          alert: 'select',
          colormode: 'xy',
        },
      },
      {
        id: '6',
        body: {
          on: false,
          bri: 1,
          hue: 8410,
          sat: 140,
          effect: 'none',
          xy: [0.4574, 0.41],
          ct: 366,
          alert: 'select',
          colormode: 'xy',
        },
      },
    ],
  },
];

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
  timeStamp$: Observable<TimeStamp> = of({} as TimeStamp);
  sequenceName: string = '';
  showForm: boolean = false;
  myFlow$!: Observable<TimeStamp>;
  sequencesArr: SequenceItem[] = [];

  constructor(
    private store: Store<AppState>,
    private flowService: FlowService
  ) {}

  ngOnInit(): void {
    const audio: any = document.querySelector('audio');

    this.setButtonText(audio);

    this.myFlow$ = new Observable((subscriber) => {
      audio.ontimeupdate = (event: any) => {
        this.currentTime = audio.currentTime;

        const s = Math.floor(this.currentTime) % 60;
        const m = Math.floor(this.currentTime / 60) % 60;
        const h = Math.floor(this.currentTime / 60 / 60) % 60;

        this.sec = s < 10 ? '0' + s : s.toString();
        this.min = m < 10 ? '0' + m : m.toString();
        this.hrs = h < 10 ? '0' + h : h.toString();

        this.timeStamp = { hh: this.hrs, mm: this.min, ss: this.sec };
        subscriber.next(this.timeStamp);
      };
    });

    this.store.select(getAllSequences).subscribe((data: SequenceItem[]) => {
      //this.sequencesArr = data;
    });
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
    const flow: SequenceItem[] = FLOW;
    const audio: any = document.querySelector('audio');

    audio.play();

    this.myFlow$
      .pipe(
        distinctUntilChanged((a, b) => {
          return JSON.stringify(a) === JSON.stringify(b);
        })
      )
      .subscribe((data) => {
        // let activityPack: SequenceItem[] = flow.filter((seq: SequenceItem) => {
        //   return JSON.stringify(seq.startTime) === JSON.stringify(data);
        // });

        flow.forEach((seq: SequenceItem) => {
          if (JSON.stringify(seq.startTime) === JSON.stringify(data)) {
            this.activate(seq);
          }
        });
      });
  }

  activate(seq: SequenceItem) {
    seq.groupActionArray.forEach((action: GroupActionUpdate) => {
      const req: GroupActionUpdateRequest = {
        on: action.body.on,
        hue: action.body.hue,
        sat: action.body.sat,
        bri: action.body.bri,
        xy: action.body.xy,
      };

      //this.flowService.updateGroup(action.id, req);
      this.store.dispatch(groupUpdateAction({ body: action }));
    });
  }
}

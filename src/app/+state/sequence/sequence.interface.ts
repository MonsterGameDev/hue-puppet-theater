import { GroupActionUpdate } from '../state.interfaces';

export interface SequenceItem {
  sequenceName: string;
  startTime: TimeStamp;
  groupActionArray: GroupActionUpdate[]; // TODO tilføj LightStateupdate
}

export interface TimeStamp {
  hh: string;
  mm: string;
  ss: string;
}

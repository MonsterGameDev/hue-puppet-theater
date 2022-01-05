import { HttpErrorResponse } from '@angular/common/http';
import { SequenceItem } from './sequence/sequence.interface';

export interface AppState {
  lights: Lights;
  groups: Groups;
  sequences: Sequences;
}

export interface Behaviors {
  loading: boolean;
  error: HttpErrorResponse | null;
}

// Lights Interfaces
export interface Lights {
  lights: Light[];
  behaviors: Behaviors;
  selectedLightId?: string;
}

export interface Light {
  id: string;
  state: State;
  swupdate: Swupdate;
  type: string;
  name: string;
  modelid: string;
  manufacturername: string;
  productname: string;
  capabilities: Capabilities;
  config: Config;
  uniqueid: string;
  swversion: string;
  swconfigid: string;
  productid: string;
}

export interface State {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: number[];
  ct: number;
  alert: string;
  colormode: string;
  mode: string;
  reachable: boolean;
}

export interface Swupdate {
  state: string;
  lastinstall: string;
}

export interface Capabilities {
  certified: boolean;
  control: Control;
  streaming: Streaming;
}

export interface Control {
  mindimlevel: number;
  maxlumen: number;
  colorgamuttype: string;
  colorgamut: number[][];
  ct: Ct;
}

export interface Streaming {
  renderer: boolean;
  proxy: boolean;
}

export interface Ct {
  min: number;
  max: number;
}

export interface Config {
  archetype: string;
  function: string;
  direction: string;
  startup: Startup;
}

export interface Startup {
  mode: string;
  configured: boolean;
}

// Groups

export interface Groups {
  groups: Group[];
  behaviors: Behaviors;
  selectedGroup?: Group;
}

export interface Group {
  id: string;
  name: string;
  lights: any[];
  sensors: any[];
  type: string;
  state: GroupState;
  recycle: boolean;
  class: string;
  stream: Stream;
  locations: Locations;
  action: Action;
}
export interface GroupState {
  all_on: boolean;
  any_on: boolean;
}
export interface Stream {
  proxymode: string;
  proxynode: string;
  active: boolean;
  owner: any;
}

export interface Locations {}

export interface Action {
  alert?: string;
  on?: boolean;
  bri?: number;
  hue?: number;
  sat?: number;
  effect?: string;
  xy?: number[];
  ct?: number;
  colormode?: any;
}

export interface GroupActionUpdate {
  id: string;
  body: GroupActionUpdateRequest;
}

export interface GroupActionUpdateRequest {
  on?: boolean;
  bri?: number;
  hue?: number;
  sat?: number;
  xy?: any;
  ct?: number;
  transitionTime?: number;
  bri_inc?: number;
  hue_inc?: number;
  sat_inc?: number;
  xy_inc?: any;
  ct_inc?: number;
  scene?: string;
  effect?: string;
  alert?: string;
}

export interface GroupActionUpdateResponse {
  success: {
    address?: string;
    value: string;
  };
}

// Sequences

export interface Sequences {
  selectedSequence?: string;
  sequences: SequenceItem[];
}

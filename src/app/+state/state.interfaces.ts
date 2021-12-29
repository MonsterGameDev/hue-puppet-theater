import { HttpErrorResponse } from '@angular/common/http';

export interface AppState {
  lights: Lights;
  groups: any;
}

export interface Behaviors {
  loading: boolean;
  error: HttpErrorResponse | null;
}

// Lights Interfaces
export interface Lights {
  lights: Light[];
  behaviors: Behaviors;
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
  on: boolean;
  alert: string;
}

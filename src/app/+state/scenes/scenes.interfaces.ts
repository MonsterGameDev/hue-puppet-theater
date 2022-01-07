import { Behaviors } from "../state.interfaces";

export interface Scene {
  id: string;
  name: string;
  type: string;
  group: string;
  lights: string[];
  owner: string;
  recycle: boolean;
  locked: boolean;
  appdata: Object;
  picture: string;
  image: any;
  lastupdated: any;
  version: number;
}

export interface Scenes {
  scenes:Scene[];
  selectedSceneId: string,
  behaviors: Behaviors
}





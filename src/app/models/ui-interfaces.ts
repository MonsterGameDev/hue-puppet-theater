import { Capabilities, Config, State, Swupdate } from './interfaces';

export interface vmLight {
  id: number;
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

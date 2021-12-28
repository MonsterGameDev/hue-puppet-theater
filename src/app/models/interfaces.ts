
export interface Light {
  state: State
  swupdate: Swupdate
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities
  config: Config
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}
export interface State {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
  mode: string
  reachable: boolean
}

export interface Group {
  name: string
  lights: any[]
  sensors: any[]
  type: string
  state: GroupState
  recycle: boolean
  class: string
  stream: Stream
  locations: Locations
  action: Action
}

export interface GroupState {
  all_on: boolean
  any_on: boolean
}

// Lights

export interface Swupdate {
  state: string
  lastinstall: string
}

export interface Capabilities {
  certified: boolean
  control: Control
  streaming: Streaming
}

export interface Control {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct
}

export interface Streaming {
  renderer: boolean
  proxy: boolean
}

export interface Ct {
  min: number
  max: number
}

export interface Config {
  archetype: string
  function: string
  direction: string
  startup: Startup
}

export interface Startup {
  mode: string
  configured: boolean
}


// Groups
export interface Stream {
  proxymode: string
  proxynode: string
  active: boolean
  owner: any
}

export interface Locations {}

export interface Action {
  on: boolean
  alert: string
}

export interface Root {
  lights: Lights
  groups: Groups
  config: Config10
  schedules: Schedules
  scenes: Scenes
  rules: Rules
  sensors: Sensors
  resourcelinks: Resourcelinks
}

export interface Lights {
  "18": N18
  "19": N19
  "20": N20
  "21": N21
  "22": N22
  "23": N23
  "24": N24
  "25": N25
  "27": N27
}

export interface N18 {
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

export interface Ct {
  min: number
  max: number
}

export interface Streaming {
  renderer: boolean
  proxy: boolean
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

export interface N19 {
  state: State2
  swupdate: Swupdate2
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities2
  config: Config2
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State2 {
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

export interface Swupdate2 {
  state: string
  lastinstall: string
}

export interface Capabilities2 {
  certified: boolean
  control: Control2
  streaming: Streaming2
}

export interface Control2 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct2
}

export interface Ct2 {
  min: number
  max: number
}

export interface Streaming2 {
  renderer: boolean
  proxy: boolean
}

export interface Config2 {
  archetype: string
  function: string
  direction: string
  startup: Startup2
}

export interface Startup2 {
  mode: string
  configured: boolean
}

export interface N20 {
  state: State3
  swupdate: Swupdate3
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities3
  config: Config3
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State3 {
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

export interface Swupdate3 {
  state: string
  lastinstall: string
}

export interface Capabilities3 {
  certified: boolean
  control: Control3
  streaming: Streaming3
}

export interface Control3 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct3
}

export interface Ct3 {
  min: number
  max: number
}

export interface Streaming3 {
  renderer: boolean
  proxy: boolean
}

export interface Config3 {
  archetype: string
  function: string
  direction: string
  startup: Startup3
}

export interface Startup3 {
  mode: string
  configured: boolean
}

export interface N21 {
  state: State4
  swupdate: Swupdate4
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities4
  config: Config4
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State4 {
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

export interface Swupdate4 {
  state: string
  lastinstall: string
}

export interface Capabilities4 {
  certified: boolean
  control: Control4
  streaming: Streaming4
}

export interface Control4 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct4
}

export interface Ct4 {
  min: number
  max: number
}

export interface Streaming4 {
  renderer: boolean
  proxy: boolean
}

export interface Config4 {
  archetype: string
  function: string
  direction: string
  startup: Startup4
}

export interface Startup4 {
  mode: string
  configured: boolean
}

export interface N22 {
  state: State5
  swupdate: Swupdate5
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities5
  config: Config5
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State5 {
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

export interface Swupdate5 {
  state: string
  lastinstall: string
}

export interface Capabilities5 {
  certified: boolean
  control: Control5
  streaming: Streaming5
}

export interface Control5 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct5
}

export interface Ct5 {
  min: number
  max: number
}

export interface Streaming5 {
  renderer: boolean
  proxy: boolean
}

export interface Config5 {
  archetype: string
  function: string
  direction: string
  startup: Startup5
}

export interface Startup5 {
  mode: string
  configured: boolean
}

export interface N23 {
  state: State6
  swupdate: Swupdate6
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities6
  config: Config6
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State6 {
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

export interface Swupdate6 {
  state: string
  lastinstall: string
}

export interface Capabilities6 {
  certified: boolean
  control: Control6
  streaming: Streaming6
}

export interface Control6 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct6
}

export interface Ct6 {
  min: number
  max: number
}

export interface Streaming6 {
  renderer: boolean
  proxy: boolean
}

export interface Config6 {
  archetype: string
  function: string
  direction: string
  startup: Startup6
}

export interface Startup6 {
  mode: string
  configured: boolean
}

export interface N24 {
  state: State7
  swupdate: Swupdate7
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities7
  config: Config7
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State7 {
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

export interface Swupdate7 {
  state: string
  lastinstall: string
}

export interface Capabilities7 {
  certified: boolean
  control: Control7
  streaming: Streaming7
}

export interface Control7 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct7
}

export interface Ct7 {
  min: number
  max: number
}

export interface Streaming7 {
  renderer: boolean
  proxy: boolean
}

export interface Config7 {
  archetype: string
  function: string
  direction: string
  startup: Startup7
}

export interface Startup7 {
  mode: string
  configured: boolean
}

export interface N25 {
  state: State8
  swupdate: Swupdate8
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities8
  config: Config8
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State8 {
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

export interface Swupdate8 {
  state: string
  lastinstall: string
}

export interface Capabilities8 {
  certified: boolean
  control: Control8
  streaming: Streaming8
}

export interface Control8 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct8
}

export interface Ct8 {
  min: number
  max: number
}

export interface Streaming8 {
  renderer: boolean
  proxy: boolean
}

export interface Config8 {
  archetype: string
  function: string
  direction: string
  startup: Startup8
}

export interface Startup8 {
  mode: string
  configured: boolean
}

export interface N27 {
  state: State9
  swupdate: Swupdate9
  type: string
  name: string
  modelid: string
  manufacturername: string
  productname: string
  capabilities: Capabilities9
  config: Config9
  uniqueid: string
  swversion: string
  swconfigid: string
  productid: string
}

export interface State9 {
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

export interface Swupdate9 {
  state: string
  lastinstall: string
}

export interface Capabilities9 {
  certified: boolean
  control: Control9
  streaming: Streaming9
}

export interface Control9 {
  mindimlevel: number
  maxlumen: number
  colorgamuttype: string
  colorgamut: number[][]
  ct: Ct9
}

export interface Ct9 {
  min: number
  max: number
}

export interface Streaming9 {
  renderer: boolean
  proxy: boolean
}

export interface Config9 {
  archetype: string
  function: string
  direction: string
  startup: Startup9
}

export interface Startup9 {
  mode: string
  configured: boolean
}

export interface Groups {
  "1": N1
  "2": N2
  "3": N3
  "4": N4
  "5": N5
  "6": N6
  "7": N7
  "8": N8
  "9": N9
  "10": N10
  "11": N11
  "12": N12
  "13": N13
  "14": N14
}

export interface N1 {
  name: string
  lights: any[]
  sensors: any[]
  type: string
  state: State10
  recycle: boolean
  class: string
  stream: Stream
  locations: Locations
  action: Action
}

export interface State10 {
  all_on: boolean
  any_on: boolean
}

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

export interface N2 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State11
  recycle: boolean
  class: string
  action: Action2
}

export interface State11 {
  all_on: boolean
  any_on: boolean
}

export interface Action2 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N3 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State12
  recycle: boolean
  class: string
  action: Action3
}

export interface State12 {
  all_on: boolean
  any_on: boolean
}

export interface Action3 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N4 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State13
  recycle: boolean
  class: string
  action: Action4
}

export interface State13 {
  all_on: boolean
  any_on: boolean
}

export interface Action4 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N5 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State14
  recycle: boolean
  class: string
  action: Action5
}

export interface State14 {
  all_on: boolean
  any_on: boolean
}

export interface Action5 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N6 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State15
  recycle: boolean
  class: string
  action: Action6
}

export interface State15 {
  all_on: boolean
  any_on: boolean
}

export interface Action6 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N7 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State16
  recycle: boolean
  class: string
  action: Action7
}

export interface State16 {
  all_on: boolean
  any_on: boolean
}

export interface Action7 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N8 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State17
  recycle: boolean
  action: Action8
}

export interface State17 {
  all_on: boolean
  any_on: boolean
}

export interface Action8 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N9 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State18
  recycle: boolean
  class: string
  action: Action9
}

export interface State18 {
  all_on: boolean
  any_on: boolean
}

export interface Action9 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N10 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State19
  recycle: boolean
  class: string
  action: Action10
}

export interface State19 {
  all_on: boolean
  any_on: boolean
}

export interface Action10 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N11 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State20
  recycle: boolean
  class: string
  action: Action11
}

export interface State20 {
  all_on: boolean
  any_on: boolean
}

export interface Action11 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N12 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State21
  recycle: boolean
  class: string
  action: Action12
}

export interface State21 {
  all_on: boolean
  any_on: boolean
}

export interface Action12 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N13 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State22
  recycle: boolean
  class: string
  action: Action13
}

export interface State22 {
  all_on: boolean
  any_on: boolean
}

export interface Action13 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface N14 {
  name: string
  lights: string[]
  sensors: any[]
  type: string
  state: State23
  recycle: boolean
  class: string
  action: Action14
}

export interface State23 {
  all_on: boolean
  any_on: boolean
}

export interface Action14 {
  on: boolean
  bri: number
  hue: number
  sat: number
  effect: string
  xy: number[]
  ct: number
  alert: string
  colormode: string
}

export interface Config10 {
  name: string
  zigbeechannel: number
  bridgeid: string
  mac: string
  dhcp: boolean
  ipaddress: string
  netmask: string
  gateway: string
  proxyaddress: string
  proxyport: number
  UTC: string
  localtime: string
  timezone: string
  modelid: string
  datastoreversion: string
  swversion: string
  apiversion: string
  swupdate: Swupdate10
  swupdate2: Swupdate22
  linkbutton: boolean
  portalservices: boolean
  portalconnection: string
  portalstate: Portalstate
  internetservices: Internetservices
  factorynew: boolean
  replacesbridgeid: any
  backup: Backup
  starterkitid: string
  whitelist: Whitelist
}

export interface Swupdate10 {
  updatestate: number
  checkforupdate: boolean
  devicetypes: Devicetypes
  url: string
  text: string
  notify: boolean
}

export interface Devicetypes {
  bridge: boolean
  lights: any[]
  sensors: any[]
}

export interface Swupdate22 {
  checkforupdate: boolean
  lastchange: string
  bridge: Bridge
  state: string
  autoinstall: Autoinstall
}

export interface Bridge {
  state: string
  lastinstall: string
}

export interface Autoinstall {
  updatetime: string
  on: boolean
}

export interface Portalstate {
  signedon: boolean
  incoming: boolean
  outgoing: boolean
  communication: string
}

export interface Internetservices {
  internet: string
  remoteaccess: string
  time: string
  swupdate: string
}

export interface Backup {
  status: string
  errorcode: number
}

export interface Whitelist {
  "a451634e-f16c-44ab-a1d3-609a07e8aa06": A451634eF16c44abA1d3609a07e8aa06
  "53524e8b-4f84-4bc5-9b59-254af1b046ec": N53524e8b4f844bc59b59254af1b046ec
  "05af2313-2e58-43ce-9fe9-572acae63714": N05af23132e5843ce9fe9572acae63714
  "e7f18518-7fd8-4da5-89c9-d1b134b7fdba": E7f185187fd84da589c9D1b134b7fdba
  "13870994-ae62-4841-a6fc-38dc5431590c": N13870994Ae624841A6fc38dc5431590c
  "415e68a8-9268-4ec3-9689-c2e30e3d83e0": N415e68a892684ec39689C2e30e3d83e0
  "074b7f63-2318-467c-b626-e71af86a29d2": N074b7f632318467cB626E71af86a29d2
  "6e31fd94-b3bc-40de-85e1-6a84e26c760a": N6e31fd94B3bc40de85e16a84e26c760a
  "79f5e906-43e3-465b-954f-bac13a500b91": N79f5e90643e3465b954fBac13a500b91
  "7609a29f-d2e1-4676-90ce-6eee9aeb028b": N7609a29fD2e1467690ce6eee9aeb028b
  "c3028a80-61d9-45fc-b5b1-23c8e936186f": C3028a8061d945fcB5b123c8e936186f
  "roZeTZPeBJpKOZWcmfX7ltbK81P-kt4pUK3xboED": RoZeTzpeBjpKozwcmfX7ltbK81PKt4pUk3xboEd
  "f16cee51-db41-4583-8c2d-3a335cb484fb": F16cee51Db4145838c2d3a335cb484fb
  "e39536b5-d510-4d11-93c9-7771dbf6c5f6": E39536b5D5104d1193c97771dbf6c5f6
  "bf11b9e0-e8a5-4faf-b581-471933eeed29": Bf11b9e0E8a54fafB581471933eeed29
}

export interface A451634eF16c44abA1d3609a07e8aa06 {
  "last use date": string
  "create date": string
  name: string
}

export interface N53524e8b4f844bc59b59254af1b046ec {
  "last use date": string
  "create date": string
  name: string
}

export interface N05af23132e5843ce9fe9572acae63714 {
  "last use date": string
  "create date": string
  name: string
}

export interface E7f185187fd84da589c9D1b134b7fdba {
  "last use date": string
  "create date": string
  name: string
}

export interface N13870994Ae624841A6fc38dc5431590c {
  "last use date": string
  "create date": string
  name: string
}

export interface N415e68a892684ec39689C2e30e3d83e0 {
  "last use date": string
  "create date": string
  name: string
}

export interface N074b7f632318467cB626E71af86a29d2 {
  "last use date": string
  "create date": string
  name: string
}

export interface N6e31fd94B3bc40de85e16a84e26c760a {
  "last use date": string
  "create date": string
  name: string
}

export interface N79f5e90643e3465b954fBac13a500b91 {
  "last use date": string
  "create date": string
  name: string
}

export interface N7609a29fD2e1467690ce6eee9aeb028b {
  "last use date": string
  "create date": string
  name: string
}

export interface C3028a8061d945fcB5b123c8e936186f {
  "last use date": string
  "create date": string
  name: string
}

export interface RoZeTzpeBjpKozwcmfX7ltbK81PKt4pUk3xboEd {
  "last use date": string
  "create date": string
  name: string
}

export interface F16cee51Db4145838c2d3a335cb484fb {
  "last use date": string
  "create date": string
  name: string
}

export interface E39536b5D5104d1193c97771dbf6c5f6 {
  "last use date": string
  "create date": string
  name: string
}

export interface Bf11b9e0E8a54fafB581471933eeed29 {
  "last use date": string
  "create date": string
  name: string
}

export interface Schedules {}

export interface Scenes {
  "UIM9-EmigSgJhW2": Uim9EmigSgJhW2
  imXaCPTumHuU4po: ImXaCptumHuU4po
  "7dTQBKpKnjY7ihm": N7dTqbkpKnjY7ihm
  EJvwD2nhlLtYFfc: EjvwD2nhlLtYffc
  LNbWom3uYzRuwsA: LnbWom3uYzRuwsA
  fcdSfyVZWv0e82o: FcdSfyVzwv0e82o
  ATdgS2KqJS4Gpu0: AtdgS2KqJs4Gpu0
  "9pdrn1v17UYRQ4J": N9pdrn1v17Uyrq4J
  aW9bpKlovSFmBmU: AW9bpKlovSfmBmU
  "18-jtDlZNgqhu9i": N18JtDlZngqhu9i
  nSv9mdt7eGfNke4: NSv9mdt7eGfNke4
  "0cl655dkepxAU1U": N0cl655dkepxAu1U
}

export interface Uim9EmigSgJhW2 {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata {
  version: number
  data: string
}

export interface ImXaCptumHuU4po {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata2
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata2 {
  version: number
  data: string
}

export interface N7dTqbkpKnjY7ihm {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata3
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata3 {
  version: number
  data: string
}

export interface EjvwD2nhlLtYffc {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata4
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata4 {
  version: number
  data: string
}

export interface LnbWom3uYzRuwsA {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata5
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata5 {
  version: number
  data: string
}

export interface FcdSfyVzwv0e82o {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata6
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata6 {
  version: number
  data: string
}

export interface AtdgS2KqJs4Gpu0 {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata7
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata7 {
  version: number
  data: string
}

export interface N9pdrn1v17Uyrq4J {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata8
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata8 {
  version: number
  data: string
}

export interface AW9bpKlovSfmBmU {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata9
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata9 {
  version: number
  data: string
}

export interface N18JtDlZngqhu9i {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata10
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata10 {
  version: number
  data: string
}

export interface NSv9mdt7eGfNke4 {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata11
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata11 {
  version: number
  data: string
}

export interface N0cl655dkepxAu1U {
  name: string
  type: string
  group: string
  lights: string[]
  owner: string
  recycle: boolean
  locked: boolean
  appdata: Appdata12
  picture: string
  lastupdated: string
  version: number
}

export interface Appdata12 {
  version: number
  data: string
}

export interface Rules {
  "1": N15
  "2": N26
  "3": N32
  "4": N42
  "5": N52
  "6": N62
  "7": N72
  "8": N82
  "9": N92
}

export interface N15 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition[]
  actions: Action15[]
}

export interface Condition {
  address: string
  operator: string
  value: string
}

export interface Action15 {
  address: string
  method: string
  body: Body
}

export interface Body {
  on?: boolean
  scene?: string
}

export interface N26 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition2[]
  actions: Action16[]
}

export interface Condition2 {
  address: string
  operator: string
  value: string
}

export interface Action16 {
  address: string
  method: string
  body: Body2
}

export interface Body2 {
  transitiontime: number
  scene: string
}

export interface N32 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition3[]
  actions: Action17[]
}

export interface Condition3 {
  address: string
  operator: string
  value: string
}

export interface Action17 {
  address: string
  method: string
  body: Body3
}

export interface Body3 {
  transitiontime: number
  scene: string
}

export interface N42 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition4[]
  actions: Action18[]
}

export interface Condition4 {
  address: string
  operator: string
  value: string
}

export interface Action18 {
  address: string
  method: string
  body: Body4
}

export interface Body4 {
  transitiontime: number
  scene: string
}

export interface N52 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition5[]
  actions: Action19[]
}

export interface Condition5 {
  address: string
  operator: string
  value: string
}

export interface Action19 {
  address: string
  method: string
  body: Body5
}

export interface Body5 {
  status: number
}

export interface N62 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition6[]
  actions: Action20[]
}

export interface Condition6 {
  address: string
  operator: string
  value?: string
}

export interface Action20 {
  address: string
  method: string
  body: Body6
}

export interface Body6 {
  storelightstate?: boolean
  on?: boolean
  status?: number
}

export interface N72 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition7[]
  actions: Action21[]
}

export interface Condition7 {
  address: string
  operator: string
  value?: string
}

export interface Action21 {
  address: string
  method: string
  body: Body7
}

export interface Body7 {
  scene: string
}

export interface N82 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition8[]
  actions: Action22[]
}

export interface Condition8 {
  address: string
  operator: string
  value?: string
}

export interface Action22 {
  address: string
  method: string
  body: Body8
}

export interface Body8 {
  status: number
}

export interface N92 {
  name: string
  owner: string
  created: string
  lasttriggered: string
  timestriggered: number
  status: string
  recycle: boolean
  conditions: Condition9[]
  actions: Action23[]
}

export interface Condition9 {
  address: string
  operator: string
  value?: string
}

export interface Action23 {
  address: string
  method: string
  body: Body9
}

export interface Body9 {
  status: number
}

export interface Sensors {
  "1": N16
  "2": N28
  "3": N33
}

export interface N16 {
  state: State24
  config: Config11
  name: string
  type: string
  modelid: string
  manufacturername: string
  swversion: string
}

export interface State24 {
  daylight: any
  lastupdated: string
}

export interface Config11 {
  on: boolean
  configured: boolean
  sunriseoffset: number
  sunsetoffset: number
}

export interface N28 {
  state: State25
  config: Config12
  name: string
  type: string
  modelid: string
  manufacturername: string
  swversion: string
  uniqueid: string
  recycle: boolean
}

export interface State25 {
  status: number
  lastupdated: string
}

export interface Config12 {
  on: boolean
  reachable: boolean
}

export interface N33 {
  state: State26
  config: Config13
  name: string
  type: string
  modelid: string
  manufacturername: string
  swversion: string
  uniqueid: string
  recycle: boolean
}

export interface State26 {
  status: number
  lastupdated: string
}

export interface Config13 {
  on: boolean
  reachable: boolean
}

export interface Resourcelinks {
  "65038": N65038
}

export interface N65038 {
  name: string
  description: string
  type: string
  classid: number
  owner: string
  recycle: boolean
  links: string[]
}

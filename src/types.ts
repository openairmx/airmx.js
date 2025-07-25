import type { MqttClient } from 'mqtt'
import type { EagleStatus } from './eagle.js'
import type { SnowStatus } from './snow.js'

export interface Config {
  mqtt: MqttClient
  devices: Device[]
}

export interface Device {
  id: number
  key: string
}

export type SnowListener = (status: SnowStatus) => void
export type EagleListener = (status: EagleStatus) => void

export enum MessageSource {
  Snow = 1,
  Eagle = 2,
  App_iOS = 3,
  App_Android = 4,
}

export interface Message<T> {
  cmdId: number
  name: string
  time: number
  from: MessageSource
  data: T
  sig: string
}

export enum Switch {
  Off = 0,
  On,
}

export enum EagleMode {
  Manual = 0,
  Ai,
  Silent,
  Turbo,
}

export interface EagleStatusData {
  version: string
  power: Switch
  mode: EagleMode
  status: number
  denoise: Switch
  heatStatus: Switch
  cadr: number
  prm: number
  diffPressure1: number
  diffPressure2: number
  t0: number
  g4Id: string
  g4Percent: number
  carbonId: string
  carbonPercent: number
  hepaId: string
  hepaPercent: number
}

export enum SensorState {
  Sampling = 'sampling',
}

export enum BatteryState {
  Charging = 'charging',
  Discharge = 'discharge',
}

export interface SnowStatusData {
  battery: number
  battery_state: BatteryState
  co2: number
  co2_state: SensorState
  co2_time: number
  h: number
  humi_state: SensorState
  oh: number
  opm100: number
  opm25: number
  ot: number
  pm100: number
  pm25: number
  pm250: number
  pm50: number
  pm_state: SensorState
  pm_time: number
  t: number
  temp_state: SensorState
  temp_unit: 'c'
  time: number
  tvoc: number
  tvoc_duration: number
  tvoc_state: SensorState
  tvoc_time: number
  tvoc_unit: 'ppb'
  version: string
  version_type: 'release'
}

export interface EagleControlData {
  power: Switch
  heatStatus: Switch
  mode: EagleMode
  cadr: number
  denoise: Switch
}

export interface InstantPushData {
  frequencyTime: number
  durationTime: number
}

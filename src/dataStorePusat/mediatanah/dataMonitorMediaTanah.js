import { defineStore } from 'pinia'

export const dataMonitorHardwareMediaTanah = defineStore({
  id: "data.monitor.hardware.mediatanah",
  state: () => {
    return { 
      airTandonSprayer: ' ',
      pompaSprayer: '',
      kelembapanTanah1: ' ',
      kelembapanTanah2: ' ',
      kelembapanTanah3: ' ',
      kelembapanTanah4: ' ',
      kelembapanTanahAvg: ' ',
    }
  },
  actions: {
  }
})
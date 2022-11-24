import { defineStore } from 'pinia'

export const dataMonitorHardwareGreenhouse2 = defineStore({
  id: "data.monitor.hardware.greenhouse.2",
  state: () => {
    return { 
      temperatur: ' ',
      kelembaban: ' ',
      airTandonSprayer: ' ',
      pompaSprayer: ' ',
      airNutrisiHidroponik1: ' ',
      airNutrisiHidroponik2: ' ',
      airNutrisiHidroponik3: ' ',
      airNutrisiHidroponik4: ' ',
    }
  },
  actions: {
  }
})
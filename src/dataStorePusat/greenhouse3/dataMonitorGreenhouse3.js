import { defineStore } from 'pinia'

export const dataMonitorHardwareGreenhouse3 = defineStore({
  id: "data.monitor.hardware.greenhouse.3",
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
      airNutrisiHidroponik5: ' ',
      airNutrisiHidroponik6: ' ',
    }
  },
  actions: {
  }
})
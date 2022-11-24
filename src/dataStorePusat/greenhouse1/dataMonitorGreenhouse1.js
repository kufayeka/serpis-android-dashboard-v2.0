import { defineStore } from 'pinia'

export const dataMonitorHardwareGreenhouse1 = defineStore({
  id: "data.monitor.hardware.greenhouse.1",
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
      db_DataTemperatur: '',
      db_DataKelembaban: 0,
      db_DataTimestamp: 0,
      db_Fixed: 0,
    }
  },
  actions: {
    convertData(){ 
    }
  }
})
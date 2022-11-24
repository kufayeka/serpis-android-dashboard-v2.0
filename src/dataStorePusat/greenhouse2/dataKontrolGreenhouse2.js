import { defineStore } from 'pinia'

export const dataKontrolHardwareGreenhouse2 = defineStore({
  id: "data.kontrol.hardware.greenhouse.2",
  state: () => {
    return { 
      kontrolpompaSprayer: ' ',
      thresholdONPompaSprayer: ' ',
      thresholdOFFPompaSprayer: ' ',
      timerONPompaSprayer: ' ',
      timerOFFPompaSprayer: ' ',
      kirimParameterKeServer : '',
    }
  },
  actions: {
  }
})
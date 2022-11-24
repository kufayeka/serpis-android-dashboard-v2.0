import { defineStore } from 'pinia'

export const dataKontrolHardwareGreenhouse3 = defineStore({
  id: "data.kontrol.hardware.greenhouse.3",
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
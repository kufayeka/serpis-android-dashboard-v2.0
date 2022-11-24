import { defineStore } from 'pinia'

export const dataKontrolHardwareGreenhouse1 = defineStore({
  id: "data.kontrol.hardware.greenhouse.1",
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
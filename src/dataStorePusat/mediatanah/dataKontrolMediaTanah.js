import { defineStore } from 'pinia'

export const dataKontrolHardwareMediaTanah = defineStore({
  id: "data.kontrol.hardware.mediatanah",
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
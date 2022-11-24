import { defineStore } from 'pinia'

export const dataModalPengaturanParameter = defineStore({
  id: "data.modal.pengaturan.parameter",
  state: () => {
    return { 
        thresholdONPompaSprayer: ' ',
        thresholdOFFPompaSprayer: ' ',
        timerONPompaSprayer: ' ',
        timerOFFPompaSprayer: ' ',
        popUpMuncul: false,
    }
  },
  actions: {
  }
})
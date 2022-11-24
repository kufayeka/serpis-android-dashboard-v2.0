import { defineStore } from 'pinia'

export const dataModeKontrolHardware = defineStore({
  id: "data.kontrol.mode.hardware",
  state: () => {
    return { 
        modeKontrol : '',
        modeKontrolDariServer : '',
    }
  },
  actions: {
  }
})
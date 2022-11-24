import { defineStore } from 'pinia'

export const dataKontrolTampilanPengguna = defineStore({
  id: "data.kontrol.tampilan.pengguna",
  state: () => {
    return { 
        tampilan_pengguna: '',
        konten_fullscreen : 'x',
    }
  },
  actions: {
    ubahTampilan(tampilan){
        this.tampilan_pengguna = tampilan;
    },

    bukaKontenFullscreen(konten){
        this.konten_fullscreen = konten;
    }
  }
})
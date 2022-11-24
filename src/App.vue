<script setup>
import { App as CapacitorApp } from "@capacitor/app";
import { ref, watch } from "vue";
//---------------------------------------//
import { dataKontrolTampilanPengguna } from "./dataStorePusat/dataKontrolTampilanPengguna";
//---------------------------------------//
import halamanMonitor from "./views/halamanMonitor.vue";
import halamanKontrol from "./views/halamanKontrol.vue";
import halamanPengaturan from "./views/halamanPengaturan.vue";
import halamanModalGantiModeKontrol from "./views/global/halamanModalGantiModeKontrol.vue";
import mqttKoneksi from "@/koneksi/koneksiMqtt.vue";
import bottomNav from "@/components/bottomNavbar.vue";
import modalKoneksiDisconnected from "@/views/global/modal/modalKoneksiDisconnected.vue";
import modalKoneksiLoading from "@/views/global/modal/modalKoneksiLoading.vue";
//---------------------------------------//
let tampilan = dataKontrolTampilanPengguna();
//----------Logic deteksi double tap tombol back delay 500ms-----------------------------//
let lastBack = Date.now();
CapacitorApp.addListener("backButton", () => {
  if (Date.now() - lastBack < 1000) {
    //close aplikasi
    console.log("Double Tap!!!!");
  } else {
    //back halaman
    tampilan.bukaKontenFullscreen("x");
    console.log("Single Tap!!!!");
    lastBack = Date.now();
  }
});
//---------------------------------------//
import { useSwipe } from '@vueuse/core'

const el = ref(null)
const { isSwiping, direction, lengthX} = useSwipe(el)


watch([isSwiping, direction], ([x, y]) => {
  // do whatever you want
  console.log(x, y);
  if (x == true && y == "RIGHT"){
    tampilan.bukaKontenFullscreen("x");
  }
});

</script>

<style scoped>
.disable-text-selection {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

<template>
  <div class="disable-text-selection" ref="el">
<!--     <p>touch gesture:{{ direction }}</p> -->
    <mqttKoneksi />
    <modal-koneksi-disconnected v-show="tampilan.tampilan_pengguna === 'disconnected'" />
    <modal-koneksi-loading v-show="tampilan.tampilan_pengguna === 'loading'" />
    <halaman-monitor v-show="tampilan.tampilan_pengguna === 'monitor'" />
    <halaman-kontrol v-show="tampilan.tampilan_pengguna === 'kontrol'" />
    <halaman-pengaturan v-show="tampilan.tampilan_pengguna === 'pengaturan'" />
    <halaman-modal-ganti-mode-kontrol
      v-show="tampilan.tampilan_pengguna === 'gantiModeKontrol?'"
    />
    <bottom-nav
      v-show="
        (tampilan.konten_fullscreen === 'x') &
        (tampilan.tampilan_pengguna != 'disconnected')
      "
    />
  </div>
</template>

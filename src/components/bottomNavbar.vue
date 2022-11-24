<script setup>
import { dataKontrolTampilanPengguna } from "../dataStorePusat/dataKontrolTampilanPengguna";
let tampilanPengguna = dataKontrolTampilanPengguna();

function ubahKeMonitor() {
  tampilanPengguna.ubahTampilan("monitor");
}

function ubahKeKontrol() {
  tampilanPengguna.ubahTampilan("kontrol");
}

function ubahKePengaturan() {
  tampilanPengguna.ubahTampilan("pengaturan");
}
</script>

<style scoped>
.tekanNavbar {
  opacity: 1;
}
</style>

<template>
  <div class="btm-nav shadow-bottomNav">
    <button
      @click="ubahKeMonitor"
      :class="{ ['active']: tampilanPengguna.tampilan_pengguna === 'monitor' }"
    >
      <img src="../assets/icons/icons8-performance-macbook-100.png" class="w-5 h-5" />
      <span class="btm-nav-label">Monitor</span>
    </button>
    <button
      @click="ubahKeKontrol"
      :class="{ ['active']: tampilanPengguna.tampilan_pengguna === 'kontrol' }"
    >
      <img src="../assets/icons/icons8-tune-100.png" class="w-5 h-5" />
      <span class="btm-nav-label">Kontrol</span>
    </button>
    <button
      @click="ubahKePengaturan"
      :class="{ ['active']: tampilanPengguna.tampilan_pengguna === 'pengaturan' }"
    >
      <img src="../assets/icons/icons8-support-100.png" class="w-5 h-5" />
      <span class="btm-nav-label">Pengaturan</span>
    </button>
  </div>
</template>

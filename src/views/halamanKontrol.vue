<script setup>
import { ref } from "vue";
//-----------------------------------------------------------------------------------------------------------//
const tabOrder = ref(2);
//-----------------------------------------------------------------------------------------------------------//
import halamanKontrolManual from "../views/halamanKontrol/halamanKontrolManual.vue";
import halamanKontrolAutomatis from "../views/halamanKontrol/halamanKontrolAutomatis.vue";
//-----------------------------------------------------------------------------------------------------------//
import { dataModeKontrolHardware } from "@/dataStorePusat/dataModeKontrolHardware";
import { dataKontrolTampilanPengguna } from "@/dataStorePusat/dataKontrolTampilanPengguna";
//-----------------------------------------------------------------------------------------------------------//
var data_mode_kontrol_hardware = dataModeKontrolHardware();
var data_kontrol_tampilan_pengguna = dataKontrolTampilanPengguna();
//-----------------------------------------------------------------------------------------------------------//
data_mode_kontrol_hardware.$subscribe((mutation, state) => {
  if (state.modeKontrolDariServer == "Automatis") {
    tabOrder.value = 1;
  } else if (state.modeKontrolDariServer == "Manual") {
    tabOrder.value = 2;
  }
});
//-----------------------------------------------------------------------------------------------------------//
const toggleBukaTabAutomatis = () => {
  data_mode_kontrol_hardware.modeKontrol = "Automatis";
};

const toggleBukaTabManual = () => {
  data_mode_kontrol_hardware.modeKontrol = "Manual";
};
//-----------------------------------------------------------------------------------------------------------//
</script>

<style></style>

<template>
  <div class="flex flex-col w-full h-full">
    <!-------Panel Judul Halaman-------->
    <div class="bg-green-800 absolute w-full rounded-b-3xl -z-30">
      <img
        src="../assets/background/5476705_2832233.jpg"
        class="object-cover w-full h-52 scale-x-100 rounded-b-3xl opacity-40"
      />
    </div>
    <div class="grid justify-items-center mt-10">
      <p class="text-4xl text-white drop-shadow-xl font-bold tracking-wider">
        KRPL - SERPIS
      </p>
      <p class="text-2xl text-white drop-shadow-xl font-semibold tracking-widest">
        "Kebun Kita"
      </p>
    </div>
    <!-------Konten-------->
    <div class="flex flex-col relative top-7">
      <!-----Panel Info Halaman---------->
      <div class="border border-white rounded-xl p-1 mx-4">
        <div class="bg-white shadow-card rounded-xl p-3 flex flex-row space-x-3">
          <div class="bg-white rounded-full flex p-3 h-20 w-32">
            <img
              src="../assets/icons/icons8-adjust-100.png"
              class="object-contain w-28"
            />
          </div>
          <div>
            <h1 class="text-lg font-extrabold tracking-wider">Kontrol</h1>
            <p class="text-sm">
              Halaman kontrol untuk pompa sprayer greenhouse & media tanah.
            </p>
          </div>
        </div>
      </div>
      <!-----Tab---------->
      <div class="flex justify-center mt-7">
        <div class="border border-green-800 rounded-xl">
          <div class="bg-white rounded-xl p-0.5">
            <div class="relative grid grid-cols-2 gap-1 mx-3">
              <!--------------->
              <div
                class="bg-green-700 p-1 rounded-lg px-7"
                :class="{ ['opacity-40']: tabOrder === 2 }"
                @click.prevent="toggleBukaTabAutomatis"
              >
                <h1 class="font-bold text-md text-white flex justify-center">Otomatis</h1>
              </div>
              <!--------------->
              <div
                class="bg-green-700 p-1 rounded-lg px-7"
                :class="{ ['opacity-40']: tabOrder === 1 }"
                @click.prevent="toggleBukaTabManual"
              >
                <h1 class="font-bold text-md text-white flex justify-center">Manual</h1>
              </div>
              <!--------------->
            </div>
          </div>
        </div>
      </div>
      <!-----Konten Halaman Kontrol---------->
      <div class="grid justify-items-center mt-4 pb-24">
        <halaman-kontrol-automatis v-if="tabOrder === 1" />
        <halaman-kontrol-manual v-if="tabOrder === 2" />
      </div>
    </div>
  </div>
</template>

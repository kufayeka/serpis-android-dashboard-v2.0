<script setup>
import { ref, computed } from "vue";
//
import { dataKontrolTampilanPengguna } from "../dataStorePusat/dataKontrolTampilanPengguna";
import { dataModalPengaturanParameter } from "@/dataStorePusat/dataModalPengaturanParameter";
//
import { dataKontrolHardwareGreenhouse1 } from "../dataStorePusat/greenhouse1/dataKontrolGreenhouse1";
import { dataKontrolHardwareGreenhouse2 } from "../dataStorePusat/greenhouse2/dataKontrolGreenhouse2";
import { dataKontrolHardwareGreenhouse3 } from "../dataStorePusat/greenhouse3/dataKontrolGreenhouse3";
import { dataKontrolHardwareMediaTanah } from "../dataStorePusat/mediatanah/dataKontrolMediaTanah";
//---------------------------------------//
import halamanPengaturanGreenhouse1 from "@/views/halamanPengaturan/halamanPengaturanGreenhouse1.vue";
import halamanPengaturanGreenhouse2 from "@/views/halamanPengaturan/halamanPengaturanGreenhouse2.vue";
import halamanPengaturanGreenhouse3 from "@/views/halamanPengaturan/halamanPengaturanGreenhouse3.vue";
import halamanPengaturanMediaTanah from "@/views/halamanPengaturan/halamanPengaturanMediaTanah.vue";
import modalPengaturanSukses from "@/views/global/modal/modalPengaturanSukses.vue";
import modalLoading from "@/views/global/modal/modalLoading.vue";
//---------------------------------------//
//
let kontrol_tampilan = dataKontrolTampilanPengguna();
let data_modal_pengaturan_parameter = dataModalPengaturanParameter();
//
let kontrol_hardware_greenhouse1 = dataKontrolHardwareGreenhouse1();
let kontrol_hardware_greenhouse2 = dataKontrolHardwareGreenhouse2();
let kontrol_hardware_greenhouse3 = dataKontrolHardwareGreenhouse3();
let kontrol_hardware_mediatanah = dataKontrolHardwareMediaTanah();
//
//---------------------------------------//
const tutup = "x";
const kontenPengaturanGreenhouse1 = "pengaturanGreenhouse1";
const kontenPengaturanGreenhouse2 = "pengaturanGreenhouse2";
const kontenPengaturanGreenhouse3 = "pengaturanGreenhouse3";
const kontenPengaturanMediaTanah = "pengaturanMediaTanah";
//---------------------------------------//
function keHalaman(halaman_x) {
  setTimeout(() => {
    kontrol_tampilan.bukaKontenFullscreen(halaman_x);
  }, 500);
}
//---------------------------------------//
var togglePopUp = ref(false);
var toggleLoading = ref(false);
kontrol_tampilan.$subscribe((mutations, state) => {
  if (state.konten_fullscreen == "popUpPengaturanSukses") {
    togglePopUp.value = true;
  } else {
    togglePopUp.value = false;
  }

  if (state.konten_fullscreen == "popUpLoading") {
    toggleLoading.value = true;
  } else {
    toggleLoading.value = false;
  }
});
</script>

<style></style>

<template>
  <div class="flex flex-col w-full">
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
            <h1 class="text-lg font-extrabold tracking-wider">Pengaturan</h1>
            <p class="text-sm">
              Halaman pengaturan parameter mode otomatis. Klik untuk mengubah.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-----Panel Pengaturan--------->
    <div
      class="flex justify-center mt-10"
      v-show="kontrol_tampilan.konten_fullscreen == tutup"
    >
      <div class="flex flex-col h-full mb-32">
        <!---Pengaturan : Greenhouse 1----------->
        <div class="grid justify-items-center h-fit mt-3">
          <div
            class="p-2 bg-green-700 rounded-md shadow-card flex flex-row active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
            @click.prevent="keHalaman(kontenPengaturanGreenhouse1)"
          >
            <div class="flex flex-col mt-3 ml-2 mr-2 mb-3">
              <h1 class="text-white text-lg font-bold tracking-wider">
                Sprayer Greenhouse 1
              </h1>
              <div class="flex flex-row text-xs mt-2">
                <div class="flex flex-col">
                  <p class="text-white">
                    ON di suhu :
                    {{ kontrol_hardware_greenhouse1.thresholdONPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    ON selama :
                    {{ kontrol_hardware_greenhouse1.timerONPompaSprayer }} Mnt
                  </p>
                </div>
                <div class="flex flex-col ml-3">
                  <p class="text-white">
                    OFF di suhu :
                    {{ kontrol_hardware_greenhouse1.thresholdOFFPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    OFF selama :
                    {{ kontrol_hardware_greenhouse1.timerOFFPompaSprayer }} Mnt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---Pengaturan : Greenhouse 2----------->
        <div class="grid justify-items-center h-fit mt-3">
          <div
            class="p-2 bg-green-700 rounded-md shadow-card flex flex-row active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
            @click.prevent="keHalaman(kontenPengaturanGreenhouse2)"
          >
            <div class="flex flex-col mt-3 ml-2 mr-2 mb-3">
              <h1 class="text-white text-lg font-bold tracking-wider">
                Sprayer Greenhouse 2
              </h1>
              <div class="flex flex-row text-xs mt-2">
                <div class="flex flex-col">
                  <p class="text-white">
                    ON di suhu :
                    {{ kontrol_hardware_greenhouse2.thresholdONPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    ON selama :
                    {{ kontrol_hardware_greenhouse2.timerONPompaSprayer }} Mnt
                  </p>
                </div>
                <div class="flex flex-col ml-3">
                  <p class="text-white">
                    OFF di suhu :
                    {{ kontrol_hardware_greenhouse2.thresholdOFFPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    OFF selama :
                    {{ kontrol_hardware_greenhouse2.timerOFFPompaSprayer }} Mnt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---Pengaturan : Greenhouse 3----------->
        <div class="grid justify-items-center h-fit mt-3">
          <div
            class="p-2 bg-green-700 rounded-md shadow-card flex flex-row active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
            @click.prevent="keHalaman(kontenPengaturanGreenhouse3)"
          >
            <div class="flex flex-col mt-3 ml-2 mr-2 mb-3">
              <h1 class="text-white text-lg font-bold tracking-wider">
                Sprayer Greenhouse 3
              </h1>
              <div class="flex flex-row text-xs mt-2">
                <div class="flex flex-col">
                  <p class="text-white">
                    ON di suhu :
                    {{ kontrol_hardware_greenhouse3.thresholdONPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    ON selama :
                    {{ kontrol_hardware_greenhouse3.timerONPompaSprayer }} Mnt
                  </p>
                </div>
                <div class="flex flex-col ml-3">
                  <p class="text-white">
                    OFF di suhu :
                    {{ kontrol_hardware_greenhouse3.thresholdOFFPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    OFF selama :
                    {{ kontrol_hardware_greenhouse3.timerOFFPompaSprayer }} Mnt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---Pengaturan : Media Tanah----------->
        <div class="grid justify-items-center h-fit mt-3">
          <div
            class="p-2 bg-green-700 rounded-md shadow-card flex flex-row active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
            @click.prevent="keHalaman(kontenPengaturanGreenhouse3)"
          >
            <div class="flex flex-col mt-3 ml-2 mr-2 mb-3">
              <h1 class="text-white text-lg font-bold tracking-wider">
                Sprayer Media Tanah
              </h1>
              <div class="flex flex-row text-xs mt-2">
                <div class="flex flex-col">
                  <p class="text-white">
                    ON di suhu :
                    {{ kontrol_hardware_greenhouse3.thresholdONPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    ON selama :
                    {{ kontrol_hardware_greenhouse3.timerONPompaSprayer }} Mnt
                  </p>
                </div>
                <div class="flex flex-col ml-3">
                  <p class="text-white">
                    OFF di suhu :
                    {{ kontrol_hardware_greenhouse3.thresholdOFFPompaSprayer }} &#176; C
                  </p>
                  <p class="text-white">
                    OFF selama :
                    {{ kontrol_hardware_greenhouse3.timerOFFPompaSprayer }} Mnt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------Tab Card Konten (Fullscreen)-------------->
    <div
      v-show="kontrol_tampilan.konten_fullscreen != tutup"
      class="w-full absolute top-0 flex z-20 animate-pop-out"
    >
      <halaman-pengaturan-greenhouse-1
        v-show="kontrol_tampilan.konten_fullscreen === kontenPengaturanGreenhouse1"
      />
      <halaman-pengaturan-greenhouse-2
        v-show="kontrol_tampilan.konten_fullscreen === kontenPengaturanGreenhouse2"
      />
      <halaman-pengaturan-greenhouse-3
        v-show="kontrol_tampilan.konten_fullscreen === kontenPengaturanGreenhouse3"
      />
      <halaman-pengaturan-media-tanah
        v-show="kontrol_tampilan.konten_fullscreen === kontenPengaturanMediaTanah"
      />
    </div>
    <!--------Modal Dark Overlay-------------->
    <div
      class="w-full h-screen absolute top-0 flex z-20 bg-black opacity-50"
      v-show="togglePopUp == true || toggleLoading == true"
    />
    <!--------Modal-------------->
    <div class="w-full h-screen absolute top-0 flex z-30" v-show="togglePopUp == true">
      <!--------Modal Sukses-------------->
      <modal-pengaturan-sukses />
    </div>
    <div class="w-full h-screen absolute top-0 flex z-30" v-show="toggleLoading == true">
      <!--------Modal Loading-------------->
      <modal-loading />
    </div>
  </div>
</template>

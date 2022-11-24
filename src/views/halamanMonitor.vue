<script setup>
//---------------------------------------//
import { ref } from "vue";
import { dataKontrolTampilanPengguna } from "../dataStorePusat/dataKontrolTampilanPengguna";
//---------------------------------------//
import tabGreenhouse from "./halamanMonitor/halamanGreenhouse.vue";
import tabMediaTanah from "../views/halamanMonitor/halamanMediaTanah.vue";
//---------------------------------------//
import halamanGreenhouse1 from "../views/halamanGreenhouse/halamanGreenhouse1.vue";
import halamanGreenhouse2 from "../views/halamanGreenhouse/halamanGreenhouse2.vue";
import halamanGreenhouse3 from "../views/halamanGreenhouse/halamanGreenhouse3.vue";
//---------------------------------------//
let kontrol_tampilan = dataKontrolTampilanPengguna();
//---------------------------------------//
const tutup = "x";
const kontenGreenhouse1 = "greenhouse1";
const kontenGreenhouse2 = "greenhouse2";
const kontenGreenhouse3 = "greenhouse3";
//---------------------------------------//
let tabOrder = ref(1);

function toggleBukaTabHidroponik() {
  tabOrder.value = 1;
}

function toggleBukaTabMediaTanah() {
  tabOrder.value = 2;
}
//---------------------------------------//

</script>

<style></style>

<template>
  <div class="flex flex-col">
    <!------Gambar Atas--------->
    <div class="bg-green-800 absolute w-full rounded-b-3xl -z-30">
      <img
        src="../assets/background/5476705_2832233.jpg"
        class="object-cover w-full h-52 scale-x-100 rounded-b-3xl opacity-40"
      />
    </div>
    <!------Judul KRPL SERPIS--------->
    <div class="grid justify-items-center mt-10">
      <p class="text-4xl text-white drop-shadow-xl font-bold tracking-wider">
        KRPL - SERPIS
      </p>
      <p class="text-2xl text-white drop-shadow-xl font-semibold tracking-widest">
        "Kebun Kita"
      </p>
    </div>
    <!------Panel Judul Halaman--------->
    <div class="flex flex-col relative top-7" ref="el">
      <div class="border border-white rounded-xl p-1 mx-4">
        <div class="bg-white shadow-card rounded-xl p-3 flex flex-row space-x-3">
          <div class="bg-white rounded-full flex p-3 h-20 w-28">
            <img src="../assets/icons/dashboard.jpg" class="object-contain w-28" />
          </div>
          <div>
            <h1 class="text-lg font-extrabold tracking-wider">Monitor</h1>
            <p class="text-sm">
              Halaman monitor untuk Greenhouse Hidroponik & Media Tanah.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!------Tab: Hidroponik / Media Tanah--------->
    <div class="flex justify-center mt-14">
      <div class="border border-green-800 rounded-xl">
        <div class="bg-white rounded-xl p-0.5">
          <div class="relative grid grid-cols-2 gap-1 mx-3">
            <!--------------->
            <div
              class="bg-green-700 p-1 rounded-lg px-7"
              :class="{ ['opacity-40']: tabOrder === 2 }"
              @click.prevent="toggleBukaTabHidroponik"
            >
              <h1 class="font-bold text-md text-white flex justify-center">Hidroponik</h1>
            </div>
            <!--------------->
            <div
              class="bg-green-700 p-1 rounded-lg px-7"
              :class="{ ['opacity-40']: tabOrder === 1 }"
              @click.prevent="toggleBukaTabMediaTanah"
            >
              <h1 class="font-bold text-md text-white flex justify-center">
                Media Tanah
              </h1>
            </div>
            <!--------------->
          </div>
        </div>
      </div>
    </div>
    <!------Tab Konten--------->
    <div
      class="flex justify-center mt-2"
      v-show="kontrol_tampilan.konten_fullscreen === tutup"
    >
      <div class="bg-green-700 w-full h-96 rounded-t-3xl">
        <div class="mt-10">
          <tab-greenhouse v-if="tabOrder === 1" />
          <tab-media-tanah v-if="tabOrder === 2" />
        </div>
      </div>
    </div>
    <!--------Tab Card Konten (Fullscreen)-------------->
    <div
      v-show="kontrol_tampilan.konten_fullscreen !== tutup"
      class="w-full absolute top-0 flex z-50 bg-green-600 animate-pop-out"
    >
      <halaman-greenhouse-1
        v-show="kontrol_tampilan.konten_fullscreen === kontenGreenhouse1"
      />
      <halaman-greenhouse-2
        v-show="kontrol_tampilan.konten_fullscreen === kontenGreenhouse2"
      />
      <halaman-greenhouse-3
        v-show="kontrol_tampilan.konten_fullscreen === kontenGreenhouse3"
      />
    </div>
  </div>
</template>

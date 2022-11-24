<script setup>
import { dataKontrolTampilanPengguna } from "../../dataStorePusat/dataKontrolTampilanPengguna";
//---------------------------------------//
const kontrol_tampilan = dataKontrolTampilanPengguna();
//---------------------------------------//
const kontenGreenhouse1 = "greenhouse1";
const kontenGreenhouse2 = "greenhouse2";
const kontenGreenhouse3 = "greenhouse3";

function keHalaman(greenhouse_x) {
  setTimeout(() => {
    kontrol_tampilan.bukaKontenFullscreen(greenhouse_x);
  }, 200);
}
//---------------------------------------//
</script>

<style></style>

<template>
  <div class="flex overflow-x-scroll pb-7 mt-5">
    <div class="flex flex-nowrap ml-3 mr-3 space-x-5">
      <!--------Card-------->
      <div
        class="w-52 bg-white rounded-xl shadow-xl flex flex-col active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
        @click.prevent="keHalaman(kontenGreenhouse1)"
      >
        <div>
          <img src="../../assets/foto/greenhouse_1.jpg" class="rounded-t-xl scale-95" />
        </div>
        <div class="bg-green-800 w-full h-divider" />
        <div class="flex flex-col pb-3">
          <div class="flex flex-row">
            <h1
              class="text-lg font-semibold text-green-800 relative left-3 mt-1 tracking-wider"
            >
              Greenhouse - 1
            </h1>
            <img
              src="../../assets/icons/Logo_Serpis_New_Leaf-removebg-preview.png"
              class="w-7 h-7 mt-1 ml-4 scale-90"
            />
          </div>
          <div class="flex flex-row">
            <p class="text-xs font-semibold ml-5 opacity-90">~ Hidroponik : 6 Unit</p>
          </div>
        </div>
      </div>
      <!--------Card-------->
      <div
        class="w-52 bg-white rounded-xl shadow-xl flex flex-col active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
        @click.prevent="keHalaman(kontenGreenhouse2)"
      >
        <div>
          <img src="../../assets/foto/greenhouse_2.jpg" class="rounded-t-xl scale-95" />
        </div>
        <div class="bg-green-800 w-full h-divider" />
        <div class="flex flex-col pb-3">
          <div class="flex flex-row">
            <h1
              class="text-lg font-semibold text-green-800 relative left-3 mt-1 tracking-wider"
            >
              Greenhouse - 2
            </h1>
            <img
              src="../../assets/icons/Logo_Serpis_New_Leaf-removebg-preview.png"
              class="w-7 h-7 mt-1 ml-4 scale-90"
            />
          </div>
          <div class="flex flex-row">
            <p class="text-xs font-semibold ml-5 opacity-90">~ Hidroponik : 5 Unit</p>
          </div>
        </div>
      </div>
      <!--------Card-------->
      <div
        class="w-52 bg-white rounded-xl shadow-xl flex flex-col active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
        @click.prevent="keHalaman(kontenGreenhouse3)"
      >
        <div>
          <img src="../../assets/foto/greenhouse_1.jpg" class="rounded-t-xl scale-95" />
        </div>
        <div class="bg-green-800 w-full h-divider" />
        <div class="flex flex-col pb-3">
          <div class="flex flex-row">
            <h1
              class="text-lg font-semibold text-green-800 relative left-3 mt-1 tracking-wider"
            >
              Greenhouse - 3
            </h1>
            <img
              src="../../assets/icons/Logo_Serpis_New_Leaf-removebg-preview.png"
              class="w-7 h-7 mt-1 ml-4 scale-90"
            />
          </div>
          <div class="flex flex-row">
            <p class="text-xs font-semibold ml-5 opacity-90">~ Hidroponik : 6 Unit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

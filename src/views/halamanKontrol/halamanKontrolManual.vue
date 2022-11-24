<script setup>
import { ref, computed } from "vue";
//---------------------------------------//
import { dataMonitorHardwareGreenhouse1 } from "../../dataStorePusat/greenhouse1/dataMonitorGreenhouse1";
import { dataMonitorHardwareGreenhouse2 } from "../../dataStorePusat/greenhouse2/dataMonitorGreenhouse2";
import { dataMonitorHardwareGreenhouse3 } from "../../dataStorePusat/greenhouse3/dataMonitorGreenhouse3";
import { dataMonitorHardwareMediaTanah } from "../../dataStorePusat/mediatanah/dataMonitorMediaTanah";
//
import { dataKontrolHardwareGreenhouse1 } from "../../dataStorePusat/greenhouse1/dataKontrolGreenhouse1";
import { dataKontrolHardwareGreenhouse2 } from "../../dataStorePusat/greenhouse2/dataKontrolGreenhouse2";
import { dataKontrolHardwareGreenhouse3 } from "../../dataStorePusat/greenhouse3/dataKontrolGreenhouse3";
import { dataKontrolHardwareMediaTanah } from "../../dataStorePusat/mediatanah/dataKontrolMediaTanah";
//
let monitor_hardware_greenhouse_1 = dataMonitorHardwareGreenhouse1();
let monitor_hardware_greenhouse_2 = dataMonitorHardwareGreenhouse2();
let monitor_hardware_greenhouse_3 = dataMonitorHardwareGreenhouse3();
let monitor_hardware_mediatanah = dataMonitorHardwareMediaTanah();
//
let kontrol_hardware_greenhouse_1 = dataKontrolHardwareGreenhouse1();
let kontrol_hardware_greenhouse_2 = dataKontrolHardwareGreenhouse2();
let kontrol_hardware_greenhouse_3 = dataKontrolHardwareGreenhouse3();
let kontrol_hardware_mediatanah = dataKontrolHardwareMediaTanah();
//---------------------------------------//
let statusButton = ["ON", "OFF", ""];
//---------------------------------------//
let toggleSprayA = ref(false);
let toggleSprayB = ref(false);
let toggleSprayC = ref(false);
let toggleSprayD = ref(false);
//---------------------------------------//
function triggerToggleSprayGreen1() {
  toggleSprayA = !toggleSprayA;
  if (toggleSprayA === true) {
    kontrol_hardware_greenhouse_1.kontrolpompaSprayer = statusButton[0];
  } else {
    kontrol_hardware_greenhouse_1.kontrolpompaSprayer = statusButton[1];
  }
}

function triggerToggleSprayGreen2() {
  toggleSprayB = !toggleSprayB;
  if (toggleSprayB === true) {
    kontrol_hardware_greenhouse_2.kontrolpompaSprayer = statusButton[0];
  } else {
    kontrol_hardware_greenhouse_2.kontrolpompaSprayer = statusButton[1];
  }
}

function triggerToggleSprayGreen3() {
  toggleSprayC = !toggleSprayC;
  if (toggleSprayC === true) {
    kontrol_hardware_greenhouse_3.kontrolpompaSprayer = statusButton[0];
  } else {
    kontrol_hardware_greenhouse_3.kontrolpompaSprayer = statusButton[1];
  }
}

function triggerToggleSprayMediaTanah() {
  toggleSprayD = !toggleSprayD;
  if (toggleSprayD === true) {
    kontrol_hardware_mediatanah.kontrolpompaSprayer = statusButton[0];
  } else {
    kontrol_hardware_mediatanah.kontrolpompaSprayer = statusButton[1];
  }
}
</script>

<style>
.emphasize-inset {
  box-shadow: inset 0 0 7px 4px rgba(255, 255, 255, 0.3);
}

.emphasize-inset-dark {
  box-shadow: inset 0 0 7px 4px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div class="flex flex-col justify-center">
    <!-------Konten---------->
    <div class="grid justify-items-center mt-4 mx-9">
      <div class="grid grid-cols-2 grid-rows-2 gap-3">
        <!---Tombol SprinklerMedia Tanah-------------->
        <div class="border-tipis border-gray-500 p-0.5 rounded-md shadow-card">
          <div
            class="flex p-3 text-white rounded-md active:scale-95 transition duration-150 ease-in-out"
            @click.prevent="triggerToggleSprayMediaTanah"
            :class="{
              ['bg-green-700 emphasize-inset']:
                monitor_hardware_mediatanah.pompaSprayer === statusButton[0],
              ['bg-red-900 emphasize-inset-dark']:
                monitor_hardware_mediatanah.pompaSprayer === statusButton[1],
              ['bg-gray-500']:
                monitor_hardware_mediatanah.pompaSprayer === statusButton[2],
            }"
          >
            <div class="grid grid-rows-2 grid-cols-2">
              <div class="bg-white h-8 w-8 rounded-5xl">
                <img
                  src="../../assets/icons/icons8-sprinkler-64.png"
                  class="object-contain"
                />
              </div>
              <h1 class="text-xl font-extrabold">
                {{ monitor_hardware_mediatanah.pompaSprayer }}
              </h1>
              <h1 class="col-span-2 text-sm mt-4 flex justify-center w-24">
                Sprinkler - Media Tanah
              </h1>
            </div>
          </div>
        </div>
        <!---Tombol Sprinkler Greenhouse 1-------------->
        <div class="border-tipis border-gray-500 p-0.5 rounded-md shadow-card">
          <div
            class="flex p-3 text-white rounded-md active:scale-95 transition duration-150 ease-in-out"
            @click.prevent="triggerToggleSprayGreen1"
            :class="{
              ['bg-green-700 emphasize-inset']:
                monitor_hardware_greenhouse_1.pompaSprayer === statusButton[0],
              ['bg-red-900 emphasize-inset-dark']:
                monitor_hardware_greenhouse_1.pompaSprayer === statusButton[1],
              ['bg-gray-500']:
                monitor_hardware_greenhouse_1.pompaSprayer === statusButton[2],
            }"
          >
            <div class="grid grid-rows-2 grid-cols-2">
              <div class="bg-white h-8 w-8 rounded-5xl">
                <img
                  src="../../assets/icons/icons8-sprayer-64.png"
                  class="object-cover w-10 p-2"
                />
              </div>
              <h1 class="text-xl font-extrabold">
                {{ monitor_hardware_greenhouse_1.pompaSprayer }}
              </h1>
              <h1 class="text-sm mt-4 col-span-2 flex justify-center">
                Sprayer - Greenhouse 1
              </h1>
            </div>
          </div>
        </div>
        <!---Tombol Sprinkler Greenhouse 2-------------->
        <div class="border-tipis border-gray-500 p-0.5 rounded-md shadow-card">
          <div
            class="flex p-3 text-white rounded-md active:scale-95 transition duration-150 ease-in-out"
            @click="triggerToggleSprayGreen2"
            :class="{
              ['bg-green-700 emphasize-inset']:
                monitor_hardware_greenhouse_2.pompaSprayer === statusButton[0],
              ['bg-red-900 emphasize-inset-dark']:
                monitor_hardware_greenhouse_2.pompaSprayer === statusButton[1],
              ['bg-gray-500']:
                monitor_hardware_greenhouse_2.pompaSprayer === statusButton[2],
            }"
          >
            <div class="grid grid-rows-2 grid-cols-2">
              <div class="bg-white h-8 w-8 rounded-5xl">
                <img
                  src="../../assets/icons/icons8-sprayer-64.png"
                  class="object-cover w-10 p-2"
                />
              </div>
              <h1 class="text-xl font-extrabold">
                {{ monitor_hardware_greenhouse_2.pompaSprayer }}
              </h1>
              <h1 class="text-sm mt-4 col-span-2 flex justify-center">
                Sprayer - Greenhouse 2
              </h1>
            </div>
          </div>
        </div>
        <!---Tombol Sprinkler Greenhouse 3-------------->
        <div class="border-tipis border-gray-500 p-0.5 rounded-md shadow-card">
          <div
            class="flex p-3 text-white rounded-md active:scale-95 transition duration-150 ease-in-out"
            @click="triggerToggleSprayGreen3"
            :class="{
              ['bg-green-700 emphasize-inset']:
                monitor_hardware_greenhouse_3.pompaSprayer === statusButton[0],
              ['bg-red-900 emphasize-inset-dark']:
                monitor_hardware_greenhouse_3.pompaSprayer === statusButton[1],
              ['bg-gray-500']:
                monitor_hardware_greenhouse_3.pompaSprayer === statusButton[2],
            }"
          >
            <div class="grid grid-rows-2 grid-cols-2">
              <div class="bg-white h-8 w-8 rounded-5xl">
                <img
                  src="../../assets/icons/icons8-sprayer-64.png"
                  class="object-cover w-10 p-2"
                />
              </div>
              <h1 class="text-xl font-extrabold">
                {{ monitor_hardware_greenhouse_3.pompaSprayer }}
              </h1>
              <h1 class="text-sm mt-4 col-span-2 flex justify-center">
                Sprayer - Greenhouse 3
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

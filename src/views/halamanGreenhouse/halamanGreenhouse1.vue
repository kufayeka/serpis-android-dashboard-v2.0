<script setup>
import { ref, computed } from "vue";
import { dataMonitorHardwareGreenhouse1 } from "../../dataStorePusat/greenhouse1/dataMonitorGreenhouse1";
//---------------------------------------//
import grafikGreenhouse1 from "@/components/grafikComponent/grafikGreenhouse1.vue";
//---------------------------------------//
var data_monitor_greenhouse1 = dataMonitorHardwareGreenhouse1();
//---------------------------------------//
</script>

<style></style>

<template>
  <div class="relative w-full h-screen bg-white -z-40">
    <!-------Gambar Background-------->
    <div class="absolute w-full -z-30">
      <img
        src="../../assets/foto/greenhouse_1.jpg"
        class="object-cover w-full h-52 scale-x-100 opacity-90"
      />
    </div>
    <!-------Judul Halaman---------->
    <div class="grid justify-items-center">
      <h1
        class="text-3xl font-extrabold bg-green-800 px-2 rounded-3xl text-white drop-shadow-md tracking-wider mt-28"
      >
        Green House - 1
      </h1>
    </div>
    <!-------Konten-------->
    <div class="flex flex-col">
      <div class="flex flex-col relative top-5">
        <!-----Panel Info (Temperatur, Kelembaban, dll) ---------->
        <div class="flex justify-center">
          <div
            class="bg-white outline outline-offset-2 outline-1 outline-green-800 w-11/12 rounded-xl shadow-lg pb-3"
          >
            <!--Judul Panel--------------->
            <h1
              class="text-xl font-extrabold justify-center flex mt-3 drop-shadow-md tracking-wider"
            >
              Data Terkini
            </h1>
            <!----------------->
            <div class="grid justify-items-center mt-4">
              <div class="grid grid-cols-2 grid-rows-2 gap-1">
                <!----------------->
                <div
                  class="flex flex-row border border-green-600 rounded-lg p-1 shadow-lg"
                >
                  <div class="bg-green-700 rounded-5xl w-10 h-10 row-span-2 mr-2">
                    <img
                      src="../../assets/icons/icons8-temperature-90.png"
                      class="object-cover scale-75"
                    />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="text-xl font-extrabold">
                      {{ data_monitor_greenhouse1.temperatur }}&#176; C
                    </h1>
                    <h1 class="text-2xs font-bold opacity-80 relative -top-1">
                      Temperatur
                    </h1>
                  </div>
                </div>
                <!----------------->
                <div
                  class="flex flex-row border border-blue-400 rounded-lg p-1 shadow-lg"
                >
                  <div class="bg-blue-400 rounded-5xl w-10 h-10 row-span-2 mr-2">
                    <img
                      src="../../assets/icons/icons8-humidity-100.png"
                      class="object-cover scale-75"
                    />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="text-xl font-extrabold">
                      {{ data_monitor_greenhouse1.kelembaban }} %
                    </h1>
                    <h1 class="text-2xs font-bold opacity-80 relative -top-1">
                      Kelembaban
                    </h1>
                  </div>
                </div>
                <!----------------->
                <div class="flex flex-row border border-red-600 rounded-lg p-1 shadow-lg">
                  <div class="bg-red-700 rounded-5xl w-10 h-10 row-span-2 mr-2">
                    <img
                      src="../../assets/icons/icons8-pump-100.png"
                      class="object-cover scale-75"
                    />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="text-lg font-extrabold">
                      {{ data_monitor_greenhouse1.pompaSprayer }}
                    </h1>
                    <h1 class="text-2xs font-bold opacity-80 relative -top-1">
                      Pompa Sprayer
                    </h1>
                  </div>
                </div>
                <!----------------->
                <div
                  class="flex flex-row border border-blue-700 rounded-lg p-1 shadow-lg"
                >
                  <div class="bg-blue-700 rounded-5xl w-10 h-10 row-span-2 mr-2">
                    <img
                      src="../../assets/icons/icons8-machine-wash-warm-100.png"
                      class="object-cover scale-75"
                    />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="text-lg font-extrabold">
                      {{ data_monitor_greenhouse1.airTandonSprayer }}
                    </h1>
                    <h1 class="text-2xs font-bold opacity-80 relative -top-1">
                      Tandon Sprayer
                    </h1>
                  </div>
                </div>
                <!----------------->
              </div>
            </div>
          </div>
        </div>
        <!-----Garis Divider---------->
        <div class="flex justify-center mt-7">
          <div class="w-11/12 h-divider bg-gray-400" />
        </div>
        <!-----Judul: Tabel (Temperatur & Kelembaban)---------->
        <div class="flex justify-center mt-1">
          <div class="flex flex-col">
            <h1
              class="text-xl font-extrabold justify-center flex mt-2 drop-shadow-md tracking-wider"
            >
              Grafik
            </h1>
            <!--------------Grafik------------------------->
            <grafik-greenhouse-1 />
          </div>
        </div>
        <!-----Garis Divider---------->
        <div class="flex justify-center mt-7">
          <div class="w-11/12 h-divider bg-gray-400" />
        </div>
        <!-----Judul: Kadar Air Nutrisi---------->
        <div class="flex justify-center mt-1">
          <h1
            class="text-xl font-extrabold justify-center flex mt-2 drop-shadow-md tracking-wider"
          >
            Kadar Air Nutrisi
          </h1>
        </div>
        <!-----Card: Status Air Hidroponik---------->
        <div class="flex overflow-x-scroll mt-5">
          <div class="flex flex-nowrap ml-3 mr-3 space-x-5 pb-5">
            <!--------Hidroponik 1-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 1
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik1 }}
                </h1>
              </div>
            </div>
            <!--------Hidroponik 2-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 2
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik2 }}
                </h1>
              </div>
            </div>
            <!--------Hidroponik 3-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 3
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik3 }}
                </h1>
              </div>
            </div>
            <!--------Hidroponik 4-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 4
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik4 }}
                </h1>
              </div>
            </div>
            <!--------Hidroponik 5-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 5
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik5 }}
                </h1>
              </div>
            </div>
            <!--------Hidroponik 6-------->
            <div class="w-48 bg-green-700 rounded-xl shadow-lg flex flex-col relative">
              <div>
                <h1
                  class="bg-white rounded-3xl absolute z-10 text-sm font-bold px-2 top-2 left-2 shadow-lg"
                >
                  Hidroponik 6
                </h1>
                <img
                  src="../../assets/foto/hidroponik_contoh.jpg"
                  class="rounded-t-xl scale-95"
                />
              </div>
              <div class="bg-white w-full h-divider" />
              <div class="flex flex-row p-2">
                <div class="bg-blue-700 rounded-5xl w-7 h-7 ml-2">
                  <img
                    src="../../assets/icons/icons8-machine-wash-warm-100.png"
                    class="object-cover scale-75"
                  />
                </div>
                <h1 class="text-sm font-semibold text-white relative left-2 mt-1">
                  Air Nutrisi :
                </h1>
                <h1 class="text-sm font-semibold text-white relative left-3 mt-1">
                  {{ data_monitor_greenhouse1.airNutrisiHidroponik6 }}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <!-----Garis Divider---------->
        <div class="flex justify-center mt-1">
          <div class="w-11/12 h-divider bg-gray-400" />
        </div>
      </div>
    </div>
  </div>
</template>

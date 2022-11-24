<script setup>
import { ref, computed } from "vue";
//---------------------------------------//
import { dataKontrolHardwareGreenhouse1 } from "@/dataStorePusat/greenhouse1/dataKontrolGreenhouse1";
//---------------------------------------//
let data_kontrol_hardware_greenhouse1 = dataKontrolHardwareGreenhouse1();
//---------------------------------------//
function kirimParameterKeServer() {
  setTimeout(function () {
    data_kontrol_hardware_greenhouse1.kirimParameterKeServer = "send";
    setTimeout(function () {
      data_kontrol_hardware_greenhouse1.kirimParameterKeServer = "stop_send";
    }, 100);
  }, 700);
}
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
          <div class="bg-white w-11/12 rounded-xl pb-3">
            <!--Judul Panel--------------->
            <h1
              class="text-xl font-extrabold justify-center flex mt-3 drop-shadow-md tracking-wider"
            >
              Pengaturan Parameter
            </h1>
          </div>
        </div>
        <!----------------->
        <div class="grid justify-items-center mt-4">
          <div class="flex flex-col">
            <!----------------->
            <div>
              <label class="label">
                <span class="text-sm font-semibold">Sprayer "ON" saat suhu :</span>
              </label>
              <label class="input-group">
                <input
                  type="number"
                  placeholder=""
                  class="input input-bordered text-center text-me font-bold"
                  v-model.lazy="data_kontrol_hardware_greenhouse1.thresholdONPompaSprayer"
                />
                <span class="italic text-md text-white font-bold bg-green-600"
                  >&#176; C</span
                >
              </label>
            </div>
            <!----------------->
            <div>
              <label class="label">
                <span class="text-sm font-semibold">Sprayer "OFF" saat suhu :</span>
              </label>
              <label class="input-group">
                <input
                  type="number"
                  placeholder=""
                  class="input input-bordered text-center text-me font-bold"
                  v-model.lazy="
                    data_kontrol_hardware_greenhouse1.thresholdOFFPompaSprayer
                  "
                />
                <span class="italic text-md text-white font-bold bg-green-600"
                  >&#176; C</span
                >
              </label>
            </div>
            <!----------------->
            <div>
              <label class="label">
                <span class="text-sm font-semibold">Durasi Sprayer "ON" :</span>
              </label>
              <label class="input-group">
                <input
                  type="number"
                  placeholder=""
                  class="input input-bordered text-center text-me font-bold"
                  v-model.lazy="data_kontrol_hardware_greenhouse1.timerONPompaSprayer"
                />
                <span class="italic text-md text-white font-semibold bg-green-600"
                  >Menit</span
                >
              </label>
            </div>
            <!----------------->
            <div>
              <label class="label">
                <span class="text-sm font-semibold">Durasi Sprayer "OFF" :</span>
              </label>
              <label class="input-group">
                <input
                  type="number"
                  placeholder=""
                  class="input input-bordered text-center text-me font-bold"
                  v-model.lazy="data_kontrol_hardware_greenhouse1.timerOFFPompaSprayer"
                />
                <span class="italic text-md text-white font-semibold bg-green-600"
                  >Menit</span
                >
              </label>
            </div>
            <!----------------->
            <div class="flex justify-center">
              <button
                class="bg-green-700 py-2 px-4 mt-7 mb-12 text-lg font-bold text-white rounded-md active:opacity-90 active:scale-95 transition duration-50 ease-in-out"
                @click.prevent="kirimParameterKeServer()"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
        <!----------------------->
      </div>
    </div>
  </div>
</template>

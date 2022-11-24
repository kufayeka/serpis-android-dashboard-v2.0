<script setup>
import { dataKontrolTampilanPengguna } from "@/dataStorePusat/dataKontrolTampilanPengguna";
import { dataModalPengaturanParameter } from "@/dataStorePusat/dataModalPengaturanParameter";
//---------------------------------------//
let kontrol_tampilan = dataKontrolTampilanPengguna();
let data_modal_pengaturan_parameter = dataModalPengaturanParameter();
//---------------------------------------//
function keHalamanPengaturan() {
  setTimeout(function () {
    kontrol_tampilan.konten_fullscreen = "x";
  }, 1000);
}
</script>

<template>
  <div class="grid place-items-center h-screen w-full">
    <div class="bg-white shadow-cardShadow2 rounded-lg w-10/12 animate-pop-out p-5">
      <div class="grid justify-items-center mb-3">
        <img
          src="../../../assets/icons/icons8-approval-100.png"
          class="object-contain w-28 mt-1"
        />
        <h1 class="text-lg font-bold">Berhasil !</h1>
        <!-----Garis Divider---------->
        <div class="w-10/12 h-divider mt-3 bg-gray-400" />
      </div>
      <!---------------------->
      <div class="flex flex-row mt-2 justify-center">
        <!---------------------->
        <div class="flex flex-col text-xs font-semibold">
          <p>Sprayer "ON" saat suhu</p>
          <p>Sprayer "OFF" saat suhu</p>
          <p>Durasi Sprayer "ON"</p>
          <p>Durasi Sprayer "OFF"</p>
        </div>
        <!---------------------->
        <div class="flex flex-col text-xs ml-1 font-semibold">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <!---------------------->
        <div class="flex flex-col text-xs ml-2 font-bold">
          <p>{{ data_modal_pengaturan_parameter.thresholdONPompaSprayer }} &#176;C</p>
          <p>{{ data_modal_pengaturan_parameter.thresholdOFFPompaSprayer }} &#176;C</p>
          <p>{{ data_modal_pengaturan_parameter.timerONPompaSprayer }} Menit</p>
          <p>{{ data_modal_pengaturan_parameter.timerOFFPompaSprayer }} Menit</p>
        </div>
      </div>
      <!-----Garis Divider---------->
      <div class="grid justify-items-center mb-3">
        <div class="w-10/12 h-divider mt-3 bg-gray-400" />
      </div>
      <!-----Back------------>
      <div class="flex justify-center">
        <button
          class="bg-green-700 py-2 px-7 mt-3 mb-4 text-lg font-bold text-white hover:bg-green-600 rounded-md active:scale-95 transition duration-50 ease-in-out"
          @click.prevent="keHalamanPengaturan()"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>

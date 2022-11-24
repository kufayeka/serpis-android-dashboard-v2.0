<script setup></script>

<template>
  <div class="grid place-items-center h-screen w-full">
    <div class="bg-white rounded-lg h-fit animate-pop-out p-5">
      <div class="grid justify-items-center mb-5">
        <lottie-animation
          ref="anim"
          :animationData="require('../../../assets/animasi/111323-failed-animation.json')"
          :loop="true"
          :autoPlay="true"
          :speed="1"
          class="w-44"
        />
        <h1 class="text-md font-bold">Tidak Terhubung ke server.</h1>
        <p class="text-sm mt-10">
          Cek koneksi internet, lalu mulai aplikasi ini kembali.
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>

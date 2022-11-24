<script setup></script>

<style></style>

<template>
  <div class="grid justify-items-center">
    <div
      class="bg-white w-full rounded-xl border border-green-700 grid justify-items-center scale-90"
    >
      <lottie-animation
        ref="anim"
        :animationData="require('../../assets/animasi/lf20_yggyojez.json')"
        :loop="true"
        :autoPlay="true"
        :speed="0.8"
        class="w-36"
      />
      <div>
        <h1
          class="text-sm bg-green-700 rounded-lg p-2 text-white font-semibold mx-5 mb-4 flex justify-center"
        >
          Mode Otomatis Aktif !
        </h1>
        <h1
          class="text-xs rounded-lg p-2 italic text-black font-semibold mx-5 mb-4 flex justify-center"
        >
          *Buka halaman pengaturan untuk mengatur parameter mode otomatis*
        </h1>
      </div>
    </div>
  </div>
</template>

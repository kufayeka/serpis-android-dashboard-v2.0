<script setup></script>

<template>
  <div class="grid place-items-center h-screen w-full">
    <div class="bg-white rounded-lg h-fit animate-pop-out p-5">
      <div class="grid justify-items-center mb-5">
        <lottie-animation
          ref="anim"
          :animationData="
            require('../../../assets/animasi/24072-connecting-the-dots.json')
          "
          :loop="true"
          :autoPlay="true"
          :speed="0.5"
          class="w-44"
        />
        <h1 class="text-md font-bold">Memulai Koneksi . . .</h1>
      </div>
    </div>
  </div>
</template>

<style></style>

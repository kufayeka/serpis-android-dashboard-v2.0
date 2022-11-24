<script setup></script>

<template>
  <div class="grid place-items-center h-screen w-full">
    <div class="bg-white rounded-lg h-fit animate-pop-out p-5">
      <div class="grid justify-items-center mb-5">
        <lottie-animation
          ref="anim"
          :animationData="require('../../../assets/animasi/loading_animasi.json')"
          :loop="true"
          :autoPlay="true"
          :speed="1"
          class="w-36"
        />
        <h1 class="text-md font-bold">Mengubah Parameter . . .</h1>
      </div>
    </div>
  </div>
</template>

<style></style>

<template>
  <div v-if="false" class="absolute top-0 bg-white w-full h-full z-50">
    <div class="mt-52">
      <!--------Halaman Menghubungkan----------->
      <div v-if="false" class="grid justify-items-center grid-cols-1 grid-rows-2">
        <lottie-animation
          ref="anim"
          :animationData="require('../assets/animasi/5615-loading.json')"
          :loop="true"
          :autoPlay="true"
          :speed="0.4"
          @loopComplete="loopComplete"
          @complete="complete"
          @enterFrame="enterFrame"
          @segmentStart="segmentStart"
          @stopped="stopped"
          class="w-44"
        />
        <h1 class="text-lg text-green-800 font-semibold">Menghubungkan ke server...</h1>
      </div>
      <!--------Halaman Koneksi Gagal----------->
      <div v-if="true" class="grid justify-items-center grid-cols-1 grid-rows-3">
        <lottie-animation
          ref="anim"
          :animationData="require('../assets/animasi/111323-failed-animation.json')"
          :loop="true"
          :autoPlay="true"
          :speed="1"
          @loopComplete="loopComplete"
          @complete="complete"
          @enterFrame="enterFrame"
          @segmentStart="segmentStart"
          @stopped="stopped"
          class="w-44"
        />
        <h1 class="text-lg text-red-600 font-semibold">Koneksi ke server gagal.</h1>
      </div>
      <!--------Halaman Koneksi Berhasil----------->
      <div v-if="false" class="grid justify-items-center grid-cols-1 grid-rows-2">
        <lottie-animation
          ref="anim"
          :animationData="require('../assets/animasi/95029-success.json')"
          :loop="true"
          :autoPlay="true"
          :speed="0.8"
          @loopComplete="loopComplete"
          @complete="complete"
          @enterFrame="enterFrame"
          @segmentStart="segmentStart"
          @stopped="stopped"
          class="w-44"
        />
        <h1 class="text-lg text-white font-semibold">Koneksi ke server berhasil.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

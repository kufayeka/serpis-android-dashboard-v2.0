<template>
  <div class="flex overflow-x-scroll pb-7 mt-5">
    <div class="flex flex-nowrap ml-3 mr-3 space-x-5">
      <!--------Card-------->
      <div
        class="w-52 bg-white rounded-xl shadow-xl flex flex-col"
        @click.prevent="goToHalamanGreenhouse1"
      >
        <div>
          <img src="../../assets/foto/greenhouse_1.jpg" class="rounded-t-xl scale-95" />
        </div>
        <div class="bg-green-800 w-full h-divider" />
        <div class="flex flex-row pb-2">
          <h1
            class="text-lg font-semibold text-green-800 relative left-3 mt-1 tracking-wider"
          >
            Media Tanah
          </h1>
          <img
            src="../../assets/icons/Logo_Serpis_New_Leaf-removebg-preview.png"
            class="w-7 h-7 mt-1 ml-4 scale-90"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

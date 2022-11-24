<script setup>
import { ref } from "vue";
import { dataMonitorHardwareGreenhouse1 } from "@/dataStorePusat/greenhouse1/dataMonitorGreenhouse1";
import plByMonth from "@/components/grafikComponent/data.json";
import axios, { Axios } from "axios";

var idn = require("apexcharts/dist/locales/id.json");

let data_monitor = dataMonitorHardwareGreenhouse1();

let dataChart = ref();
let series = ref();
let dataDB = ref();

let dataJSON = plByMonth;

dataChart.value = [
  { x: 1662066228577, y: 8 },
  { x: 1662066263265, y: 10 },
  { x: 1662066274707, y: 3 },
];

series.value = [
  {
    name: "Moisture *Template Data*",
    data: dataChart,
  },
];

setInterval(() => {
  const dataDB = data_monitor.db_DataKelembaban;
  const dataDBJSON = JSON.parse(dataDB);
  series.value = [
    {
      name: "Moisture Updated",
      data: dataDBJSON.data,
    },
  ];
}, 1000);

const chartOptions = {
  chart: {
    height: 350,
    type: "area",
    locales: [idn],
    defaultLocale: "id",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [],
    labels: {
      datetimeUTC: false,
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,
    max: 50,
  },
  tooltip: {
    x: {
      format: "d/M/yyyy HH:mm:s",
    },
  },
};
</script>

<template>
  <div class="grid justify-items-center w-screen">
    <div class="w-full">
      <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<style></style>

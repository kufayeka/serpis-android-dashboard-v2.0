<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref, computed } from "vue";
import mqtt from "mqtt";
import { StatusBar, Style } from "@capacitor/status-bar";
//-----------------------------------------------------------------------------------------------------------//
import { dataDaftarTopikMQTT } from "../dataStorePusat/dataDaftarTopikMQTT";
//
let daftar_topik_MQTT = dataDaftarTopikMQTT();
//-----------------------------------------------------------------------------------------------------------//
import { dataMonitorHardwareGreenhouse1 } from "../dataStorePusat/greenhouse1/dataMonitorGreenhouse1";
import { dataMonitorHardwareGreenhouse2 } from "../dataStorePusat/greenhouse2/dataMonitorGreenhouse2";
import { dataMonitorHardwareGreenhouse3 } from "../dataStorePusat/greenhouse3/dataMonitorGreenhouse3";
import { dataMonitorHardwareMediaTanah } from "../dataStorePusat/mediatanah/dataMonitorMediaTanah";
//
import { dataKontrolHardwareGreenhouse1 } from "../dataStorePusat/greenhouse1/dataKontrolGreenhouse1";
import { dataKontrolHardwareGreenhouse2 } from "../dataStorePusat/greenhouse2/dataKontrolGreenhouse2";
import { dataKontrolHardwareGreenhouse3 } from "../dataStorePusat/greenhouse3/dataKontrolGreenhouse3";
import { dataKontrolHardwareMediaTanah } from "../dataStorePusat/mediatanah/dataKontrolMediaTanah";
//
import { dataModeKontrolHardware } from "@/dataStorePusat/dataModeKontrolHardware";
//
import { dataKontrolTampilanPengguna } from "@/dataStorePusat/dataKontrolTampilanPengguna";
//
import { dataModalPengaturanParameter } from "@/dataStorePusat/dataModalPengaturanParameter";
//
let monitor_hardware_greenhouse1 = dataMonitorHardwareGreenhouse1();
let monitor_hardware_greenhouse2 = dataMonitorHardwareGreenhouse2();
let monitor_hardware_greenhouse3 = dataMonitorHardwareGreenhouse3();
let monitor_hardware_mediatanah = dataMonitorHardwareMediaTanah();
//
let kontrol_hardware_greenhouse1 = dataKontrolHardwareGreenhouse1();
let kontrol_hardware_greenhouse2 = dataKontrolHardwareGreenhouse2();
let kontrol_hardware_greenhouse3 = dataKontrolHardwareGreenhouse3();
let kontrol_hardware_mediatanah = dataKontrolHardwareMediaTanah();
//
let data_mode_kontrol_hardware = dataModeKontrolHardware();
//
let data_kontrol_tampilan_pengguna = dataKontrolTampilanPengguna();
//
let data_modal_pengaturan_parameter = dataModalPengaturanParameter();
//-----------------------------------------------------------------------------------------------------------//
const host = "iot-petra2.duckdns.org"
const port = 8083;
let client = { connected: false };
const opt = {
  // Clean session
  keepalive: 120,
  // Auth
  clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8), // ClientID
  username: "petra_mqtt_broker",
  password: "1n!_mqttBroker",
  useSSL: true,
  connectTimeout: 30 * 1000
}; 

let { ...options } = opt;
const connectUrl = `wss://${host}:${port}/mqtt`;
const topikMqtt = {
  topic: daftar_topik_MQTT.topikMQTTSerpisKeseluruhan,
  qos: 1,
};
let optPublish = {
  qos: 1,
  retain: false,
};
let optPublishRetained = {
  qos: 1,
  retain: true,
};
//-----------------------------------------------------------------------------------------------------------//
function buatKoneksi() {
  console.log("Memulai Koneksi...");
  data_kontrol_tampilan_pengguna.konten_fullscreen = "loading";
  try {
    client = mqtt.connect(connectUrl, options);
    client.on("connect", () => {
      console.log("Terhubung :" + client.connected);
      data_kontrol_tampilan_pengguna.tampilan_pengguna = "loading";
      setTimeout(function () {
        subscribeKeTopic();
      }, 1000);
      pesanMqttMasuk();
      //publishPesan();
      //data_kontrol_tampilan_pengguna.tampilan_pengguna = "monitor";
    });
  } catch (error) {
    console.log("Error:", error);
  }

  client.on("error", (error) => {
    console.log("Connection failed", error);
  });

  client.on("close", function () {
    console.log("Disconnected");
    data_kontrol_tampilan_pengguna.tampilan_pengguna = "disconnected";
  });
}
//-----------------------------------------------------------------------------------------------------------//
function subscribeKeTopic() {
  const { topic, qos } = topikMqtt;
  client.subscribe(topic, qos, (error, res) => {
    if (error) {
      console.log("Gagal Subscribe", error);
      return;
    }
    console.log("Berhasil Subscribe ke topics :", res);
    setTimeout(function () {
      data_kontrol_tampilan_pengguna.tampilan_pengguna = "monitor";
      data_kontrol_tampilan_pengguna.konten_fullscreen = "x";
    }, 2000);
  });
}
//-----------------------------------------------------------------------------------------------------------//
function pesanMqttMasuk() {
  client.on("message", (topic, message) => {
    console.log(`Pesan Masuk : ${message} \ndari Topic : ${topic}`);
    switch (topic) {
      //----------------KONTROL-----------------------------------//
      case daftar_topik_MQTT.modeKontrol:
        data_mode_kontrol_hardware.modeKontrolDariServer = String(message);
        break;
      //--Greenhouse 1 Parameter---//
      case daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOnThreshold:
        kontrol_hardware_greenhouse1.thresholdONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOffThreshold:
        kontrol_hardware_greenhouse1.thresholdOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdOFFPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOnTimer:
        kontrol_hardware_greenhouse1.timerONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOffTimer:
        kontrol_hardware_greenhouse1.timerOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerOFFPompaSprayer = String(message);
        break;
      //--Greenhouse 1 Database---//
      case daftar_topik_MQTT.databaseGreenhouse1DataKlimatKelembaban:
        monitor_hardware_greenhouse1.db_DataKelembaban = String(message);
        break;
      case daftar_topik_MQTT.databaseGreenhouse1DataKlimatTimestamp:
        monitor_hardware_greenhouse1.db_DataTimestamp = String(message);
        break;
      //--Greenhouse 2 Parameter---//
      case daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOnThreshold:
        kontrol_hardware_greenhouse2.thresholdONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOffThreshold:
        kontrol_hardware_greenhouse2.thresholdOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdOFFPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOnTimer:
        kontrol_hardware_greenhouse2.timerONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOffTimer:
        kontrol_hardware_greenhouse2.timerOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerOFFPompaSprayer = String(message);
        break;
      //--Greenhouse 3 Parameter---//
      case daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOnThreshold:
        kontrol_hardware_greenhouse3.thresholdONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOffThreshold:
        kontrol_hardware_greenhouse3.thresholdOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.thresholdOFFPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOnTimer:
        kontrol_hardware_greenhouse3.timerONPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerONPompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOffTimer:
        kontrol_hardware_greenhouse3.timerOFFPompaSprayer = String(message);
        data_modal_pengaturan_parameter.timerOFFPompaSprayer = String(message);
        break;
      //----------------GREENHOUSE 1-----------------------------------//
      case daftar_topik_MQTT.greenhouse1Temperatur:
        monitor_hardware_greenhouse1.temperatur = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1Kelembaban:
        monitor_hardware_greenhouse1.kelembaban = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1PompaSprayer:
        monitor_hardware_greenhouse1.pompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1TandonSprayer:
        monitor_hardware_greenhouse1.airTandonSprayer = String(message);
        break;
      //-----//
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik1:
        monitor_hardware_greenhouse1.airNutrisiHidroponik1 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik2:
        monitor_hardware_greenhouse1.airNutrisiHidroponik2 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik3:
        monitor_hardware_greenhouse1.airNutrisiHidroponik3 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik4:
        monitor_hardware_greenhouse1.airNutrisiHidroponik4 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik5:
        monitor_hardware_greenhouse1.airNutrisiHidroponik5 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse1AirNutrisiHidroponik6:
        monitor_hardware_greenhouse1.airNutrisiHidroponik6 = String(message);
        break;
      //----------------GREENHOUSE 2-----------------------------------//
      case daftar_topik_MQTT.greenhouse2Temperatur:
        monitor_hardware_greenhouse2.temperatur = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2Kelembaban:
        monitor_hardware_greenhouse2.kelembaban = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2PompaSprayer:
        monitor_hardware_greenhouse2.pompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2TandonSprayer:
        monitor_hardware_greenhouse2.airTandonSprayer = String(message);
        break;
      //-----//
      case daftar_topik_MQTT.greenhouse2AirNutrisiHidroponik1:
        monitor_hardware_greenhouse2.airNutrisiHidroponik1 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2AirNutrisiHidroponik2:
        monitor_hardware_greenhouse2.airNutrisiHidroponik2 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2AirNutrisiHidroponik3:
        monitor_hardware_greenhouse2.airNutrisiHidroponik3 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse2AirNutrisiHidroponik4:
        monitor_hardware_greenhouse2.airNutrisiHidroponik4 = String(message);
        break;
      //----------------GREENHOUSE 3-----------------------------------//
      case daftar_topik_MQTT.greenhouse3Temperatur:
        monitor_hardware_greenhouse3.temperatur = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3Kelembaban:
        monitor_hardware_greenhouse3.kelembaban = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3PompaSprayer:
        monitor_hardware_greenhouse3.pompaSprayer = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3TandonSprayer:
        monitor_hardware_greenhouse3.airTandonSprayer = String(message);
        break;
      //-----//
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik1:
        monitor_hardware_greenhouse3.airNutrisiHidroponik1 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik2:
        monitor_hardware_greenhouse3.airNutrisiHidroponik2 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik3:
        monitor_hardware_greenhouse3.airNutrisiHidroponik3 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik4:
        monitor_hardware_greenhouse3.airNutrisiHidroponik4 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik5:
        monitor_hardware_greenhouse3.airNutrisiHidroponik5 = String(message);
        break;
      case daftar_topik_MQTT.greenhouse3AirNutrisiHidroponik6:
        monitor_hardware_greenhouse3.airNutrisiHidroponik6 = String(message);
        break;
      //----------------MEDIA TANAH-----------------------------------//

      //-----//
    }
  });
}
//-----------------------------------------------------------------------------------------------------------//
function publishPesan(topik, pesan) {
  console.log("Sending Msg...");
  client.publish(topik, pesan.toString(), optPublish, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Published");
    }
  });
}
//-----------------------------------------------------------------------------------------------------------//
function publishPesanRetained(topik, pesan) {
  console.log("Sending Retained Msg...");
  client.publish(topik, pesan.toString(), optPublishRetained);
}
//-----------------------------------------------------------------------------------------------------------//
data_mode_kontrol_hardware.$subscribe((mutation, state) => {
  if (state.modeKontrol === "Automatis") {
    publishPesanRetained(daftar_topik_MQTT.modeKontrol, "Automatis");
  } else if (state.modeKontrol === "Manual") {
    publishPesanRetained(daftar_topik_MQTT.modeKontrol, "Manual");
  }
});
//
//-----------------------------------------------------------------------------------------------------------//
function popUpPengaturanSuksesShow() {
  data_kontrol_tampilan_pengguna.konten_fullscreen = "popUpPengaturanSukses";
}

function popUpPengaturanLoadingShow() {
  data_kontrol_tampilan_pengguna.konten_fullscreen = "popUpLoading";
}

function popUpPengaturanLoadingHide() {
  data_kontrol_tampilan_pengguna.konten_fullscreen = "x";
}
//-----------------------------------------------------------------------------------------------------------//
kontrol_hardware_greenhouse1.$subscribe((mutation, state) => {
  if (state.kontrolpompaSprayer === "ON") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse1PompaSprayer, "ON");
  } else if (state.kontrolpompaSprayer === "OFF") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse1PompaSprayer, "OFF");
  }
  //--------------------------Kirim Parameter Setting--------------------------------------------------//
  if (state.kirimParameterKeServer === "send") {
    popUpPengaturanLoadingShow();

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOnThreshold,
        state.thresholdONPompaSprayer
      );
    }, 1000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOffThreshold,
        state.thresholdOFFPompaSprayer
      );
    }, 2000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOnTimer,
        state.timerONPompaSprayer
      );
    }, 3000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 4000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse1PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 5000);

    setTimeout(function () {
      popUpPengaturanLoadingHide();
      popUpPengaturanSuksesShow();
    }, 6000);
  }
});

kontrol_hardware_greenhouse2.$subscribe((mutation, state) => {
  if (state.kontrolpompaSprayer === "ON") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse2PompaSprayer, "ON");
  } else if (state.kontrolpompaSprayer === "OFF") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse2PompaSprayer, "OFF");
  }
  //--------------------------Kirim Parameter Setting--------------------------------------------------//
  else if (state.kirimParameterKeServer === "send") {
    popUpPengaturanLoadingShow();

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOnThreshold,
        state.thresholdONPompaSprayer
      );
    }, 1000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOffThreshold,
        state.thresholdOFFPompaSprayer
      );
    }, 2000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOnTimer,
        state.timerONPompaSprayer
      );
    }, 3000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 4000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse2PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 5000);

    setTimeout(function () {
      popUpPengaturanLoadingHide();
      popUpPengaturanSuksesShow();
    }, 6000);
  }
});

kontrol_hardware_greenhouse3.$subscribe((mutation, state) => {
  if (state.kontrolpompaSprayer === "ON") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse3PompaSprayer, "ON");
  } else if (state.kontrolpompaSprayer === "OFF") {
    publishPesanRetained(daftar_topik_MQTT.kontrolGreenhouse3PompaSprayer, "OFF");
  }
  //--------------------------Kirim Parameter Setting--------------------------------------------------//
  else if (state.kirimParameterKeServer === "send") {
    popUpPengaturanLoadingShow();

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOnThreshold,
        state.thresholdONPompaSprayer
      );
    }, 1000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOffThreshold,
        state.thresholdOFFPompaSprayer
      );
    }, 2000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOnTimer,
        state.timerONPompaSprayer
      );
    }, 3000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 4000);

    setTimeout(function () {
      publishPesanRetained(
        daftar_topik_MQTT.kontrolGreenhouse3PompaSprayerOffTimer,
        state.timerOFFPompaSprayer
      );
    }, 5000);

    setTimeout(function () {
      popUpPengaturanLoadingHide();
      popUpPengaturanSuksesShow();
    }, 6000);
  }
});
//-----------------------------------------------------------------------------------------------------------//
function setStatusBarStyleLight() {
  //await StatusBar.setStyle({ style: Style.Dark });
  try {
    StatusBar.setOverlaysWebView({ overlay: true });
    console.log("Set Status Bar Android Full");
  } catch (error) {
    console.log(error);
  }
}
//-----------------------------------------------------------------------------------------------------------//
onMounted(() => {
  buatKoneksi();
  setStatusBarStyleLight();
});
</script>

<template></template>

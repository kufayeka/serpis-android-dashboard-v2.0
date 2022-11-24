import { defineStore } from 'pinia'

export const dataDaftarTopikMQTT = defineStore({
  id: "data.daftar.topik.MQTT",
  state: () => {
    return { 
        /*Global*/
        topikMQTTSerpisKeseluruhan: 'serpis/#',
        modeKontrol: 'serpis/kontrol/mode',
        //-------------------------------GREENHOUSE 1-------------------------------------------------------//
        /*Monitor*/
        greenhouse1Temperatur: 'serpis/monitor/greenhouse/1/klimat/temperatur',
        greenhouse1Kelembaban: 'serpis/monitor/greenhouse/1/klimat/kelembaban',
        greenhouse1PompaSprayer: 'serpis/monitor/greenhouse/1/pompa/sprayer',
        greenhouse1TandonSprayer: 'serpis/monitor/greenhouse/1/air/tandon',
        greenhouse1AirNutrisiHidroponik1: 'serpis/monitor/greenhouse/1/air/hidroponik/1',
        greenhouse1AirNutrisiHidroponik2: 'serpis/monitor/greenhouse/1/air/hidroponik/2',
        greenhouse1AirNutrisiHidroponik3: 'serpis/monitor/greenhouse/1/air/hidroponik/3',
        greenhouse1AirNutrisiHidroponik4: 'serpis/monitor/greenhouse/1/air/hidroponik/4',
        greenhouse1AirNutrisiHidroponik5: 'serpis/monitor/greenhouse/1/air/hidroponik/5',
        greenhouse1AirNutrisiHidroponik6: 'serpis/monitor/greenhouse/1/air/hidroponik/6',
        /*Kontrol*/
        kontrolGreenhouse1PompaSprayer: 'serpis/kontrol/greenhouse/1/pompa/sprayer',
        kontrolGreenhouse1Mode: 'serpis/kontrol/greenhouse/1/mode',
        kontrolGreenhouse1PompaSprayerOnThreshold: 'serpis/kontrol/greenhouse/1/pompa/sprayer/threshold/on',
        kontrolGreenhouse1PompaSprayerOffThreshold: 'serpis/kontrol/greenhouse/1/pompa/sprayer/threshold/off',
        kontrolGreenhouse1PompaSprayerOnTimer: 'serpis/kontrol/greenhouse/1/pompa/sprayer/timer/on',
        kontrolGreenhouse1PompaSprayerOffTimer: 'serpis/kontrol/greenhouse/1/pompa/sprayer/timer/off',
        /*Kontrol*/
        databaseGreenhouse1DataKlimatKelembaban: 'serpis/database/test/data',
        databaseGreenhouse1DataKlimatTimestamp: 'serpis/database/test/timestamp',
        //-------------------------------GREENHOUSE 2-------------------------------------------------------//
        /*Monitor*/
        greenhouse2Temperatur: 'serpis/monitor/greenhouse/2/klimat/temperatur',
        greenhouse2Kelembaban: 'serpis/monitor/greenhouse/2/klimat/kelembaban',
        greenhouse2PompaSprayer: 'serpis/monitor/greenhouse/2/pompa/sprayer',
        greenhouse2TandonSprayer: 'serpis/monitor/greenhouse/2/air/tandon',
        greenhouse2AirNutrisiHidroponik1: 'serpis/monitor/greenhouse/2/air/hidroponik/1',
        greenhouse2AirNutrisiHidroponik2: 'serpis/monitor/greenhouse/2/air/hidroponik/2',
        greenhouse2AirNutrisiHidroponik3: 'serpis/monitor/greenhouse/2/air/hidroponik/3',
        greenhouse2AirNutrisiHidroponik4: 'serpis/monitor/greenhouse/2/air/hidroponik/4',       
        /*Kontrol*/
        kontrolGreenhouse2PompaSprayer: 'serpis/kontrol/greenhouse/2/pompa/sprayer',
        kontrolGreenhouse2Mode: 'serpis/kontrol/greenhouse/2/mode',
        kontrolGreenhouse2PompaSprayerOnThreshold: 'serpis/kontrol/greenhouse/2/pompa/sprayer/threshold/on',
        kontrolGreenhouse2PompaSprayerOffThreshold: 'serpis/kontrol/greenhouse/2/pompa/sprayer/threshold/off',
        kontrolGreenhouse2PompaSprayerOnTimer: 'serpis/kontrol/greenhouse/2/pompa/sprayer/timer/on',
        kontrolGreenhouse2PompaSprayerOffTimer: 'serpis/kontrol/greenhouse/2/pompa/sprayer/timer/off',
        //-------------------------------GREENHOUSE 3-------------------------------------------------------//
        /*Monitor*/
        greenhouse3Temperatur: 'serpis/monitor/greenhouse/3/klimat/temperatur',
        greenhouse3Kelembaban: 'serpis/monitor/greenhouse/3/klimat/kelembaban',
        greenhouse3PompaSprayer: 'serpis/monitor/greenhouse/3/pompa/sprayer',
        greenhouse3TandonSprayer: 'serpis/monitor/greenhouse/3/air/tandon',
        greenhouse3AirNutrisiHidroponik1: 'serpis/monitor/greenhouse/3/air/hidroponik/1',
        greenhouse3AirNutrisiHidroponik2: 'serpis/monitor/greenhouse/3/air/hidroponik/2',
        greenhouse3AirNutrisiHidroponik3: 'serpis/monitor/greenhouse/3/air/hidroponik/3',
        greenhouse3AirNutrisiHidroponik4: 'serpis/monitor/greenhouse/3/air/hidroponik/4',
        greenhouse3AirNutrisiHidroponik5: 'serpis/monitor/greenhouse/3/air/hidroponik/5',
        greenhouse3AirNutrisiHidroponik6: 'serpis/monitor/greenhouse/3/air/hidroponik/6',
        /*Kontrol*/
        kontrolGreenhouse3PompaSprayer: 'serpis/kontrol/greenhouse/3/pompa/sprayer',
        kontrolGreenhouse3Mode: 'serpis/kontrol/greenhouse/3/mode',
        kontrolGreenhouse3PompaSprayerOnThreshold: 'serpis/kontrol/greenhouse/3/pompa/sprayer/threshold/on',
        kontrolGreenhouse3PompaSprayerOffThreshold: 'serpis/kontrol/greenhouse/3/pompa/sprayer/threshold/off',
        kontrolGreenhouse3PompaSprayerOnTimer: 'serpis/kontrol/greenhouse/3/pompa/sprayer/timer/on',
        kontrolGreenhouse3PompaSprayerOffTimer: 'serpis/kontrol/greenhouse/3/pompa/sprayer/timer/off',
    }
  },
  actions: {

  }
})
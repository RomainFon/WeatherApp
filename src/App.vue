<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue'
</script>

<template>
  <main class="w-screen h-screen bg-sky-900 flex">
    <div class="bg-white m-auto p-6 rounded-xl shadow-2xl">
      <Form @handleLocalization="updateLocalization"/>
      <Weather v-if="weather" :weather="weather" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      localization: null,
      weather: null,
    }
  },
  methods: {
    updateLocalization(value) {
      this.localization = value
      this.getWeather()
    },
    getWeather() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.localization}&appid=eedd73ec95de817818ed96985952612d&lang=fr`
      fetch(url)
          .then((response) => response.json())
          .then((data) => this.weather = data);
    }
  },
}
</script>

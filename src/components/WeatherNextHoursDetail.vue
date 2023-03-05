<template>
  <main class="text-center m-2 rounded-xl text-sky-900">
    <WeatherIcon :name="weather.weather[0].icon" width="w-24"/>
    <div class="-mt-4">
      <p class="font-semibold opacity-70 text-sm">{{ time }}</p>
      <div class="flex justify-center font-bold">
        <p class="text-4xl">{{ temperatureInDegrees }}</p>
        <span>°C</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import SecondaryInformation from './SecondaryInformation.vue'
import WeatherIcon from './icons/Weather.vue'
import HumidityIcon from '../assets/app-icons/humidity.svg'
import WindIcon from '../assets/app-icons/wind.svg'
</script>

<script>
export default {
  props: {
    weather: {
      type: Object,
      default: null
    }
  },
  computed: {
    time() {
      let hour = new Date(this.weather.dt_txt).getHours()
      if (hour.toString().length === 1) {
        hour = '0' + hour;
      }
      return hour+':00'
    },
    temperatureInDegrees() {
      return Math.round(this.weather.main.temp - 273.15)
    },
  },
}
</script>
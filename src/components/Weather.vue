<template>
  <main class="text-center text-sky-900">
    <WeatherIcon :name="weather.weather[0].icon" />
    <div class="-mt-12">
      <div class="flex justify-center font-bold">
        <p class="text-6xl">{{ temperatureInDegrees }}</p>
        <span>°C</span>
      </div>
      <p class="font-semibold py-2 capitalize ">{{ weather.weather[0].description }}</p>
      <div class="flex justify-around align-middle mt-4">
        <SecondaryInformation :icon="WindIcon" title="Vent" :value="windSpeed"  />
        <SecondaryInformation :icon="HumidityIcon" title="Humidité" :value="humidity" />
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
    temperatureInDegrees() {
      return Math.round(this.weather.main.temp - 273.15)
    },
    windSpeed() {
      return Math.round(this.weather.wind.speed).toString() + ' Km/h'
    },
    humidity() {
      return this.weather.main.humidity + ' %'
    }
  },
}
</script>
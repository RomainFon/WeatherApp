<template>
  <div>
    <div class="flex justify-between items-center text-sky-900 px-2 border-b-2 border-sky-900/10">
      <div class="flex items-center">
        <WeatherIcon :name="weather.weather[0].icon" width="w-24"/>
        <div>
          <p class="text-md font-semibold">{{ getWeekDay }}</p>
          <p class="text-md font-semibold opacity-70">{{ getMonthDay }}</p>
        </div>
      </div>
      <div class="flex justify-center font-bold">
        <p class="text-4xl">{{ temperatureInDegrees }}</p>
        <span>°C</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import WeatherIcon from './icons/Weather.vue'
</script>

<script>
export default {
  props: {
    weather: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dayList: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      monthList: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    }
  },
  computed: {
    getWeekDay() {
      const day = new Date(this.weather.dt_txt).getDay()
      return this.dayList[day]
    },
    getMonthDay() {
      const day = new Date(this.weather.dt_txt).getDate()
      const month = new Date(this.weather.dt_txt).getMonth()
      return day + ' ' +this.monthList[month]
    },
    temperatureInDegrees() {
      return Math.round(this.weather.main.temp - 273.15)
    },
  }
}
</script>


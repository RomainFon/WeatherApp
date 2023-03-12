<script setup>
import Previous from './icons/Previous.vue'
import WeatherForecastsDetail from './WeatherForecastsDetail.vue';
</script>

<template>
  <div>
    <div class="flex mb-4">
      <Previous class="w-6 cursor-pointer" @click="previousClick"/>
      <h2 class="ml-4 text-md text-sky-900 font-semibold">Les prochains jours</h2>
    </div>
    <div v-if="weatherForecasts">
      <WeatherForecastsDetail v-for="weather in weatherForecasts" :weather="weather"/>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    weathers: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      weatherForecasts: null,
    }
  },
  mounted() {
    this.getWeatherForecasts()
  },
  methods: {
    getWeatherForecasts() {
      // Get 5 next days
      let next5days = []
      for (let i = 1; i < 6; i++) {
        const date = new Date()
        const nextDay = new Date(date.setDate(date.getDate() + i))
        next5days.push(this.formatDate(nextDay))
      }

      this.weatherForecasts = this.weathers.filter((weather) => {
        return next5days.includes(weather.dt_txt)
      })
    },
    previousClick() {
      this.$emit('handleWeatherForecasts')
    },
    formatDate(date) {
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      return date.getFullYear() + '-' + month + '-' + day + ' 12:00:00';
    }
  }
}
</script>


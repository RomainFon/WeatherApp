<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue'
import Error from './components/Error.vue'
import Links from "./components/Links.vue";
import WeatherNextHours from './components/WeatherNextHours.vue';
import WeatherForecasts from './components/WeatherForecasts.vue';
</script>

<template>
  <main class="w-screen min-h-screen flex flex-col bg-[url('/src/assets/wallpaper.jpg')] bg-cover bg-center">
      <div class="m-auto" style="max-width: 90vw;">
        <img alt="App Weather logo" class="mx-auto mb-4 w-4/5 max-w-xs" src="./assets/logo.png"/>
        <div class="bg-white bg-opacity-80 p-6 rounded-xl shadow-2xl m-auto w-full sm:w-[32rem]">
          <div v-if="!displayWeatherForecasts">
            <Form @handleLocalization="loadWeather" :city="city"/>
            <Error v-if="error" :value="error"/>
            <Weather v-if="weather" :weather="weather"/>
            <WeatherNextHours v-if="weatherForecasts" :weathers="weatherForecasts"/>
            <button v-if="weatherForecasts" class="w-full mt-4 bg-sky-900 p-3 rounded-xl text-white font-semibold hover:opacity-90" @click="displayWeatherForecasts = true">Les prochains jours</button>
          </div>
          <WeatherForecasts v-if="displayWeatherForecasts && weatherForecasts" @handleWeatherForecasts="displayWeatherForecasts = false" :weathers="weatherForecasts"/>
        </div>
        <Links />
      </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      localization: null,
      weather: null,
      weatherForecasts: null,
      apiKey: 'eedd73ec95de817818ed96985952612d',
      error: null,
      displayWeatherForecasts: false
    }
  },
  mounted() {
    this.getUserLocation()
  },
  methods: {
    loadWeather(city) {
      this.getGeographicalCoordinates(city)
          .then((localization) => {
            this.getWeather(localization.lat, localization.lon)
            this.getWeathersNextHours(localization.lat, localization.lon)
          })
          .catch((err) => {
            this.error = err
            this.weather = null
          })
    },
    getWeather(lat, lon) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=fr`
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.weather = data
          })
    },
    getWeathersNextHours(lat, lon) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=fr`
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.weatherForecasts = data.list
          })
    },
    getGeographicalCoordinates(city) {
      return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data.length) {
                resolve(data[0])
              }
              reject('La ville recherchée est introuvable')
            })
            .catch(() => reject('Une erreur est survenue'))
      })
    },
    getUserLocation() {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) {
          this.getWeather(location.coords.latitude, location.coords.longitude)
          this.getWeathersNextHours(location.coords.latitude, location.coords.longitude)
        }
      })
    }
  },
  computed: {
    city() {
      return this.weather ? this.weather.name : null
    }
  },

  watch: {
    error() {
      setTimeout(() => {
        this.error = null
      }, 3000)
    }
  }
}
</script>

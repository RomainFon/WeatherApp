<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue'
import Error from './components/Error.vue'
</script>

<template>
  <main class="w-screen h-screen bg-sky-900 flex flex-col">
      <div class="m-auto">
        <img alt="Vue logo" class="mx-auto mb-4 w-4/5 max-w-xs" src="./assets/logo.png"/>
        <div class="bg-white p-6 rounded-xl shadow-2xl m-auto">
          <Form @handleLocalization="loadWeather" :city="city"/>
          <Weather v-if="weather" :weather="weather"/>
          <Error v-if="error" :value="error"/>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      localization: null,
      weather: null,
      apiKey: 'eedd73ec95de817818ed96985952612d',
      error: null,
    }
  },
  mounted() {
    this.getUserLocation()
  },
  methods: {
    loadWeather(city) {
      this.getGeographicalCoordinates(city)
          .then((localization) => this.getWeather(localization.lat, localization.lon))
          .catch((err) => this.error = err)
    },
    getWeather(lat, lon) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=fr`
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.weather = data
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

<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue'
</script>

<template>
  <main class="w-screen h-screen bg-sky-900 flex">
    <div class="bg-white m-auto p-6 rounded-xl shadow-2xl">
      <Form @handleLocalization="loadWeather" :city="city"/>
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
      apiKey: 'eedd73ec95de817818ed96985952612d'
    }
  },
  mounted() {
    this.getUserLocation()
  },
  methods: {
    loadWeather(city) {
      this.getGeographicalCoordinates(city)
          .then((localization) => this.getWeather(localization.lat, localization.lon))
          .catch((err) => console.log(err)) // TODO: Gérer erreur
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
            .then((data) => resolve(data[0]))
            .catch((err) => reject(err))
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
  }
}
</script>

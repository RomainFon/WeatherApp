<template>
  <main class="text-center text-sky-900">
    <img :src="weatherIcon" alt="clouds" class="m-auto w-64"/>
    <div class="-mt-12">
      <div class="flex justify-center font-bold">
        <p class="text-6xl">{{ temperatureInDegrees }}</p>
        <span>°C</span>
      </div>
      <p class="font-semibold py-2 capitalize ">{{ weather.weather[0].description }}</p>
    </div>
  </main>
</template>

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
    weatherIcon() {
      const path = `../assets/weather-icons/${this.weather.weather[0].icon}.svg`
      return new URL(path, import.meta.url)
    }
  },

  mounted() {
    console.log(this.weather)
  }

}
</script>
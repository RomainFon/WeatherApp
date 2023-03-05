<template>
  <div class="mt-8">
    <h2 class="text-center text-sky-900 font-bold">Les prochaines heures</h2>
    <div class="flex justify-between">
      <WeatherNextHoursDetail :weather="weathers[1]"/>
      <WeatherNextHoursDetail :weather="weathers[2]"/>
      <WeatherNextHoursDetail :weather="weathers[3]"/>
      <WeatherNextHoursDetail :weather="weathers[4]"/>
    </div>
  </div>
</template>

<script setup>
import WeatherNextHoursDetail from './WeatherNextHoursDetail.vue';
</script>

<script>
export default {
  props: {
    weathers: {
      type: Array,
      default: null
    }
  }
}
</script>
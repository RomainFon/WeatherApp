<template>
  <div>
    <div class="flex">
      <h2 class="ml-4 text-md text-sky-900 font-semibold">{{ weather.dt_txt }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      default: null
    }
  },
}
</script>


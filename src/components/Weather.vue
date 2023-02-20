<template>
  <main>
    <img src="../assets/weather-icons/clouds.png" alt="clouds"/>
    <div>
      <p>27</p>
      <span>°C</span>
    </div>
    <p>Pluvieux</p>
  </main>
</template>

<script>
export default {
  props: {
    localization: {
      type: String,
      default: null
    }
  }
}
</script>
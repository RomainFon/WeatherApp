<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue'
</script>

<template>
  <main class="w-screen h-screen bg-sky-900 flex">
    <div class="bg-white m-auto p-6 rounded-xl">
      <Form @handleLocalization="updateLocalization"/>
      <Weather v-if="localization" :localization="localization" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      localization: null
    }
  },
  methods: {
    updateLocalization(value) {
      this.localization = value
    }
  }
}
</script>

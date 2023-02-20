<script setup>
import Location from './icons/Location.vue'
import Search from './icons/Search.vue'
</script>

<template>
  <form class=flex @submit="submitLocalization">
    <Location class="w-6"/>
    <input v-model="localization" type="text" class="outline-0 mx-4 text-lg text-sky-900" placeholder="Entrer votre localisation"/>
    <button type="submit" class="bg-sky-200 p-2 rounded-xl">
      <Search class="w-6"/>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      localization: null
    }
  },
  methods: {
    submitLocalization(event) {
      this.$emit('handleLocalization', this.localization)
      event.preventDefault()
    }
  }
}
</script>



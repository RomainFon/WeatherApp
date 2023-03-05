<script setup>
import Location from './icons/Location.vue'
import Search from './icons/Search.vue'
</script>

<template>
  <form class='flex justify-between' @submit="submitLocalization">
    <Location class="w-6"/>
    <input v-model="localization" @keyup.enter="submitLocalization" type="text" class="outline-0 ml-4 text-md text-sky-900 font-semibold bg-transparent w-full" placeholder="Entrer votre localisation" />
    <button type="submit" class="bg-sky-200 p-3 rounded-xl hover:opacity-80">
      <Search class="w-5"/>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      localization: null
    }
  },
  methods: {
    submitLocalization(event) {
      navigator.virtualKeyboard.hide();
      this.$emit('handleLocalization', this.localization)
      event.preventDefault()
    }
  },
  watch: {
    city() {
      this.localization = this.city
    }
  }
}
</script>



<template>
  <main class="w-full text-center text-white bg-red-800 rounded-md p-2 mt-4">
      <p class="font-semibold opacity-80">{{ value }}</p>
  </main>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>
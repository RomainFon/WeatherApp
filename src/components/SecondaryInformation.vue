<template>
  <main>
    <div class="flex">
      <img :src="icon" :alt="title" class="w-8"/>
      <p class="font-semibold text-xl pl-2">{{ value }}</p>
    </div>
    <p class="font-semibold opacity-70 text-sm">{{ title }}</p>
  </main>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  }
}
</script>
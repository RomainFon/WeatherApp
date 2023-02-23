<template>
  <main>
    <div class="flex">
      <img :src="getIcon" :alt="title" class="w-8"/>
      <p class="font-semibold text-xl pl-2">{{ value }}</p>
    </div>
    <p class="font-semibold opacity-70 text-sm">{{ title }}</p>
  </main>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
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
  },
  computed: {
    getIcon() {
      const path = `../assets/app-icons/${this.icon}.svg`
      return new URL(path, import.meta.url)
    }
  }

}
</script>
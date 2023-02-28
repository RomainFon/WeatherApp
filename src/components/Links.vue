<template>
  <main class="flex justify-center m-4">
    <a href="https://github.com/RomainFon" class="mx-2 opacity-30 hover:opacity-70">
      <img alt="GitHub" class="w-8" :src="githubImg"/>
    </a>
    <a href="https://www.linkedin.com/in/fontaine-romain/" class="mx-2 opacity-30 hover:opacity-70">
      <img alt="Linkedin" class="w-8" :src="linkedinImg"/>
    </a>
  </main>
</template>

<script setup>
import githubImg from "../assets/links-icons/github.svg"
import linkedinImg from "../assets/links-icons/linkedin.svg"
</script>
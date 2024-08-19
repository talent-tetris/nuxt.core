<script setup lang="ts">

</script>

<template>
  <vite-pwa-manifest/>
  <main class="min-h-dvh min-w-screen pb-14 bg-gray-50 dark:bg-gray-950">
    <slot/>
  </main>
  <app-navigation-bar/>
  <u-notifications/>
</template>
<style scoped>

</style>

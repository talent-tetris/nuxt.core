<script setup>

</script>

<template>
  <application-bar :is-sticky="false">
    <template #left>
      <u-avatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <post-slideover/>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-list-bold" to="settings"/>
    </template>
  </application-bar>
  <div class="max-w-3xl mx-auto">
    <news-list/>
  </div>
</template>

<style scoped>

</style>

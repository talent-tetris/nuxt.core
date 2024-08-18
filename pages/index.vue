<script setup>

</script>

<template>
  <app-application-bar :is-sticky="false">
    <template #left>
      <u-avatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <post-slideover/>
      <notification-slideover/>
    </template>
  </app-application-bar>
  <div class="space-y-2 py-2 px-2 md:px-0 max-w-3xl mx-auto">
    <news-list/>
  </div>
</template>

<style scoped>

</style>

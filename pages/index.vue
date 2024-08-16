<script setup>

</script>

<template>
  <app-application-bar :is-sticky="false">
    <template #left>
      <u-avatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <notification-slideover/>
    </template>
  </app-application-bar>
  <div class="space-y-2 p-2 max-w-3xl mx-auto">
    <news-list/>
  </div>
</template>

<style scoped>

</style>

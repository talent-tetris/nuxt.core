<script setup>
const auth = useAuthStore();
</script>

<template>
  <app-application-bar :is-sticky="false">
    <template #left>
      <nuxt-link to="/profile">
        <u-avatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      </nuxt-link>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold"/>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-magnifying-glass-bold"/>
      <notification-slideover/>
    </template>
  </app-application-bar>
  <div class="space-y-2 p-2 max-w-3xl mx-auto">
    <news-list/>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
    <div class="h-48 rounded-xl bg-red-200/50"></div>
  </div>
</template>

<style scoped>

</style>

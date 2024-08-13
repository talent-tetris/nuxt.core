<script setup>
const auth = useAuthStore();
</script>

<template>
  <app-application-bar :is-sticky="false">
    <template #left>
      <UAvatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold"/>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-magnifying-glass-bold"/>
      <notification-slideover/>
    </template>
  </app-application-bar>
  <div class="space-y-2 p-2 max-w-3xl mx-auto">
    <div class="flex items-center p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
      <u-avatar icon="i-ph-user-bold" class="bg-pink-300 text-3xl" size="lg"/>
      <div class="flex-1 min-w-0 ml-2">
        <div class="font-semibold truncate">{{ auth.user.name }}</div>
        <div class="text-gray-400 text-sm font-normal truncate">
          {{ auth.user.email }}
        </div>
      </div>
    </div>
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

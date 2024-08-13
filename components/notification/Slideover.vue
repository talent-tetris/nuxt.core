<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <u-button size="lg" color="gray" variant="ghost" icon="i-ph-bell-bold" @click="isOpen = true"/>
  <u-slideover v-model="isOpen">
    <app-application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
        <div class="text-gray-900 dark:text-white font-semibold">Уведомления</div>
      </template>
    </app-application-bar>

    <div class="space-y-2 p-2 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
      <div class="h-48 rounded-xl bg-red-200/50"></div>
    </div>
  </u-slideover>
</template>

<style scoped>

</style>

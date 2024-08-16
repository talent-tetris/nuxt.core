<script setup lang="ts">
definePageMeta({layout: 'guest'})
const auth = useAuthStore();
</script>

<template>
  <app-application-bar>
    <template #left>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Настройки</div>
    </template>
  </app-application-bar>
  <div class="max-w-3xl mx-auto space-y-2 p-2">
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="p-2">
        <u-button to="/settings/appearance" icon="i-ph-palette-bold" size="xl" color="gray" variant="ghost"
                  label="Внешний вид" block
                  class="justify-start"/>
        <u-button to="/settings/devices" icon="i-ph-devices-bold" size="xl" color="gray" variant="ghost"
                  label="Устройства" block
                  class="justify-start"/>
        <hr class="border-gray-200 dark:border-gray-800 my-2 mx-2">
        <u-button @click="auth.logout" icon="i-ph-sign-out-bold" size="xl" color="primary" variant="ghost" label="Выйти"
                  block class="justify-start"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

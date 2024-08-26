<script setup lang="ts">
definePageMeta({layout: 'none'});
const auth = useAuthStore();
</script>

<template>
  <application-bar>
    <template #left>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Настройки</div>
    </template>
  </application-bar>
  <div class="max-w-3xl mx-auto space-y-2 py-2 px-2 md:px-0">
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="p-2">
        <u-button to="/settings/appearance" icon="i-ph-palette-bold" size="xl" color="gray" variant="ghost"
                  label="Внешний вид" block
                  class="justify-start"/>
        <u-button disabled icon="i-ph-devices-bold" size="xl" color="gray" variant="ghost"
                  label="Устройства" block
                  class="justify-start"/>
        <hr class="border-gray-200 dark:border-gray-800 my-2 mx-2">
        <u-button @click="auth.logout" icon="i-ph-sign-out-bold" size="xl" color="primary" variant="ghost" label="Выйти"
                  block class="justify-start"/>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="px-3.5 pt-2 font-semibold">Помощь</div>
      <div class="p-2">
        <u-button to="https://t.me/thatoranzhevyy" target="_blank" icon="i-ph-chat-teardrop-dots-bold" size="xl"
                  color="gray" variant="ghost" label="Задать вопрос" block class="justify-start"/>
        <u-button to="/settings/faq" icon="i-ph-question-bold" size="xl" color="gray" variant="ghost"
                  label="Вопросы и ответы" block
                  class="justify-start"/>
        <u-button disabled icon="i-ph-info-bold" size="xl" color="gray" variant="ghost" label="О приложении" block
                  class="justify-start"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

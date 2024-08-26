<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <u-button size="lg" color="gray" variant="ghost" icon="i-ph-bell-bold" @click="isOpen = true"/>
  <u-slideover v-model="isOpen">
    <application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
        <div class="text-gray-900 dark:text-white font-semibold">Уведомления</div>
      </template>
    </application-bar>

    <div class="h-full flex flex-col justify-center items-center text-center">
      <div class="font-semibold truncate">Пока что здесь пусто!</div>
      <div class="text-gray-400 text-sm font-normal  w-1/2">Здесь вы будете получать важные для вас уведомления</div>
    </div>
  </u-slideover>
</template>

<style scoped>

</style>

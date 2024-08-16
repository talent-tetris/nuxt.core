<script setup lang="ts">

</script>

<template>
  <app-application-bar>
    <template #left>
      <u-avatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Сервисы</div>
    </template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-list-bold" to="settings"/>
    </template>
  </app-application-bar>
  <div class="space-y-2 py-2 px-2 md:px-0 max-w-3xl mx-auto">
    <div class="bg-white dark:bg-gray-900 rounded-xl">
      <div class="grid grid-cols-4 gap-4 p-2">
        <nuxt-link to="contacts"
                   class="cursor-pointer flex flex-col items-center gap-y-1 p-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
          <div class="p-2 rounded-xl bg-red-200/90">
            <u-icon name="i-ph-users" class=" h-12 w-12 line-clamp-none text-red-500"/>
          </div>
          <div class="text-center text-sm font-medium tracking-tight line-clamp-2">Контакты</div>
        </nuxt-link>
      </div>
      <div class="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
      <div class="cursor-pointer p-4 rounded-b-xl hover:bg-gray-50 dark:hover:bg-gray-800">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <u-icon class="text-3xl text-primary" name="i-ph-squares-four"></u-icon>
            <div class="font-medium text-base tracking-tight">Все сервисы</div>
          </div>
          <u-icon class="text-2xl text-gray-700 dark:text-gray-300" name="i-ph-caret-right"></u-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

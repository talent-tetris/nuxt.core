<script setup>

</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 w-full bg-white dark:bg-gray-900">
    <div class="grid grid-cols-3 max-w-3xl mx-auto h-14">
      <nuxt-link class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/">
        <u-icon class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600" name="i-ph-house-fill"></u-icon>
        <span class="text-xs text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600">Новости</span>
      </nuxt-link>
      <nuxt-link class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/services">
        <u-icon class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600" name="i-ph-squares-four-fill"></u-icon>
        <span class="text-xs text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600">Сервисы</span>
      </nuxt-link>
      <nuxt-link class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/contacts">
        <u-icon class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600" name="i-ph-users-fill"></u-icon>
        <span class="text-xs text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600">Контакты</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.router-link-active span, .router-link-exact-active span {
  @apply text-primary-500;
}
</style>

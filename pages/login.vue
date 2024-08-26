<script setup lang="ts">
definePageMeta({layout: 'none'});
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-6">
      <div class="text-4xl xl:text-5xl font-extrabold">
        Добрый день! Введите авторизационные данные для входа
      </div>
      <LoginForm/>
    </div>
  </div>
</template>

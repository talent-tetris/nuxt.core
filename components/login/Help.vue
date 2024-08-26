<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <u-button block size="xl" variant="soft" label="Забыли пароль?" @click="isOpen = true"/>
  <u-modal v-model="isOpen">
    <div class="px-4 py-3 flex items-center space-x-4">
      <u-button color="gray" variant="ghost" icon="i-ph-x-bold" @click="isOpen = false"/>
      <div>Как получить доступ на сайт</div>
    </div>
    <u-divider/>
    <div class="px-4 py-3">
      <ul class="space-y-8">
        <li class="space-y-2">
          <div class="font-bold">Шаг 1. Написать владельцу сайта</div>
          <div class="flex gap-4">
            <div class="p-2 bg-purple-300 size-12 rounded-xl text-2xl">🐦</div>
            <div class="text-sm">
              Просто<a href="https://t.me/thatoranzhevyy" target="_blank"
                       class="text-primary-500 px-1 rounded-md hover:bg-primary-200/20">напиши владельцу сайта в
              Telegram</a>и попроси у него доступ на сайт. Он добрый малый, уверен он поделиться доступом. Не
              забудь с ним поздороваться, не надо забывать о вежливости.
            </div>
          </div>
        </li>
        <li class="space-y-2">
          <div class="font-bold">Шаг 2. Попробовать зайти на сайт</div>
          <div class="flex gap-4">
            <div class="p-2 bg-blue-300 size-12 rounded-xl text-2xl">👍</div>
            <div class="text-sm">
              Если вам повезло и вы получили логин и пароль на сайт, введите данные в приложения и заходите.
            </div>
          </div>
        </li>
        <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl space-y-2">
          <div class="text-sm font-bold">И еще кое-что...</div>
          <div class="text-sm">
            Постарайтесь не ломать сайт. Разработчик старается делать удобный инструмент, но если вы нашли какие
            нибудь недочеты или баги, сообщите, пожалуйста, разработчику.
          </div>
        </div>
      </ul>
    </div>
  </u-modal>
</template>

<style scoped>

</style>

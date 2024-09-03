<script setup lang="ts">
const isOpen = ref(false)

import {useTextareaAutosize} from '@vueuse/core'

const {textarea} = useTextareaAutosize()

onBeforeRouteLeave((to, from, next) => {
  if (isOpen.value) {
    next(false);
    isOpen.value = false;
  } else {
    next();
  }
})
const news = useNewsStore();
const state = reactive({
  body: '',
  images: [],
});

function onSubmit() {
  const formData = new FormData();
  state.images.forEach(file => {
    formData.append('images[]', file);
  });
  useFetch('posts', {
    method: 'POST',
    body: formData,
    params: {
      body: state.body,
    },
    async onResponse({response}) {
      if (response._data?.status) {
        news.refreshPosts()
        useToast().add({title: "Пост успешно опубликованно!"})
        isOpen.value = false
        state.body = ''
        state.images = []
      }
    }
  });
}

</script>

<template>
  <u-button size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold" @click="isOpen = true; isOpened()"/>
  <u-slideover v-model="isOpen">
    <application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
      </template>
      <template #right>
        <u-button size="lg" color="gray" variant="ghost" label="Опубликовать"
                  :disabled="state.body.length <= 0 && state.images.length <= 0"
                  @click.once="onSubmit()"/>
      </template>
    </application-bar>
    <hr class="border-gray-200 dark:border-gray-800 mx-2">
    <div class=" h-[calc(100%-3.5rem)] flex flex-col p-4 gap-2">
      <textarea
        class="relative block w-full disabled:cursor-not-allowed focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-xl p-0 bg-transparent focus:ring-0 focus:shadow-none resize-none"
        ref="textarea"
        v-model="state.body"
        placeholder="Что интересного расскажете?"
      />
      <div>
        <PostUploadImage v-model="state.images"/>
      </div>
    </div>
  </u-slideover>
</template>

<style scoped>

</style>

<script setup lang="ts">
const isOpen = ref(false)
const news = useNewsStore();
const state = reactive({
  body: '',
  files: [],
});
const {refresh: onSubmit, status: loginStatus} = useFetch<any>("posts", {
  method: "POST",
  body: state,
  immediate: false,
  watch: false,
  async onResponse({response}) {
    if (response._data?.status) {
      news.refreshPosts()
      useToast().add({title: "Пост успешно опубликованно!"})
      isOpen.value = false
      state.body = ''
      state.files = []
    }
    console.log(response._data)
  }
});

</script>

<template>
  <u-button size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold" @click="isOpen = true"/>
  <u-slideover v-model="isOpen">
    <application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
      </template>
      <template #right>
        <u-button size="lg" color="gray" variant="ghost" label="Опубликовать"
                  @click="onSubmit()"/>
      </template>
    </application-bar>
    <hr class="border-gray-200 dark:border-gray-800 mx-2">
    <div class="h-full flex flex-col p-4 gap-2">
      <UTextarea
        v-model="state.body"
        :padded="false"
        placeholder="Что интересного расскажете?"
        variant="none"
        size="xl"
        :ui="{wrapper:'h-full',base:'h-full',size:{xl:'text-xl'}}"
        class="w-full text-xl"
      />
      <div class="hidden">
        <UInput v-model="state.files" type="file" size="sm" icon="i-heroicons-folder"/>
      </div>
    </div>
  </u-slideover>
</template>

<style scoped>

</style>

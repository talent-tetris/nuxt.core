<script setup lang="ts">
const props = defineProps({
  post_data: {},
})
const dayjs = useDayjs();
const readMoreActivated = ref(false);

</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl p-2">
    <div class="flex items-center">
      <u-avatar size="lg" :alt="props.post_data.user.name"/>
      <div class="flex-1 min-w-0 ml-2">
        <div class="text-gray-900 dark:text-gray-100 font-semibold truncate">{{ props.post_data.user.name }}</div>
        <div class="text-gray-500 text-sm font-normal truncate">{{ dayjs(props.post_data.created_at).fromNow() }}</div>
      </div>
    </div>
    <div class="mt-2">
      <span v-if="!readMoreActivated">{{ props.post_data.body.slice(0, 200) }}   </span>
      <a v-if="!readMoreActivated" @click="readMoreActivated = !readMoreActivated"
         class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20">Показать еще</a>
      <span v-if="readMoreActivated" v-html="props.post_data.body"></span>
    </div>
    <div class="hidden mt-2 flex flex-col">
      <div class="flex flex-row flex-wrap gap-0.5">
        <div class="relative border-box overflow-hidden flex flex-auto items-center w-52 h-52">
          <img class="rounded absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg">
        </div>
        <div class="relative border-box overflow-hidden flex flex-auto items-center w-52 h-52">
          <img class="rounded absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg">
        </div>
        <div class="relative border-box overflow-hidden flex flex-auto items-center w-52 h-52">
          <img class="rounded absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover"
               src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

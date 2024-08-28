<script setup lang="ts">
const props = defineProps({
  post_data: {},
})
const dayjs = useDayjs();
const readMoreActivated = ref(false);
const config = useRuntimeConfig()
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
    <nuxt-link :to="`id-${props.post_data.user.username}`" class="flex items-center" v-if="props.post_data.user">
      <u-avatar size="md" :alt="props.post_data.user.name"/>
      <div class="flex-1 min-w-0 ml-2">
        <div class="text-sm font-semibold truncate">{{ props.post_data.user.name }}</div>
        <div class="text-gray-500 text-xs font-normal truncate">{{ dayjs(props.post_data.created_at).fromNow() }}</div>
      </div>
    </nuxt-link>
    <div class="text-sm" v-if="props.post_data.body">
      <span v-if="!readMoreActivated" class="select-text">{{ props.post_data.body.slice(0, 200) }}</span>
      <a v-if="!readMoreActivated" @click="readMoreActivated = !readMoreActivated"
         class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20">Показать еще</a>
      <span v-if="readMoreActivated" class="select-text" v-html="props.post_data.body"></span>
    </div>
    <template v-if="props.post_data.images.length > 0">
      <div class="flex flex-col">
        <div class="flex flex-row flex-wrap gap-0.5">
          <div v-for="image in props.post_data.images"
               class="relative border-box overflow-hidden flex flex-auto items-center size-32 sm:size-40 md:size-48 lg:size-52">
            <img class="rounded absolute w-full h-full left-0 right-0 top-0 bottom-0 object-cover"
                 :alt="image.file_name" :src="`${config.public.apiBase}/storage/${image.file_path}/${image.file_name}`">
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

</script>

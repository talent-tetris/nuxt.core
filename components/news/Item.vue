<script setup lang="ts">
const props = defineProps({
  post_data: {},
  userData: {}
})
const user = props.userData ?? props.post_data.user
const dayjs = useDayjs();
const readMoreActivated = ref(false);
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
    <nuxt-link :to="`id-${user.username}`" class="flex items-center" v-if="user">
      <u-avatar size="md" :alt="user.name"/>
      <div class="flex-1 min-w-0 ml-2">
        <div class="text-sm font-semibold truncate">{{ user.name }}</div>
        <div class="text-gray-500 text-xs font-normal truncate">{{ dayjs(props.post_data.created_at).fromNow() }}</div>
      </div>
    </nuxt-link>
    <div class="text-sm whitespace-pre-wrap" v-if="props.post_data.body">
      <template v-if="props.post_data.body.length>200">
        <span v-if="!readMoreActivated" class="select-text">{{ props.post_data.body.slice(0, 200) }}</span>
        <a v-if="!readMoreActivated" @click="readMoreActivated = !readMoreActivated"
           class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20">Показать еще</a>
        <span v-if="readMoreActivated" class="select-text" v-html="props.post_data.body"></span>
      </template>
      <div v-else class="select-text">
        {{ props.post_data.body }}
      </div>
    </div>
    <template v-if="props.post_data.images.length > 0">
      <NewsImages :imagesData="props.post_data.images" :galleryID="props.post_data.id"/>
    </template>
    <div class="hidden">
      <u-button size="xs" color="gray" variant="ghost" icon="i-ph-heart-bold" label="233"/>
      <u-button size="xs" color="gray" variant="ghost" icon="i-ph-chat-circle-bold" label="233"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

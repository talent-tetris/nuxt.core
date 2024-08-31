<script setup>
const news = useNewsStore();
onMounted(() => {
  news.getPosts()
})
onBeforeUnmount(() => {
  news.clearPosts()
})
</script>

<template>
  <NewsSkeleton v-if="news.pending && !news.isLoaded"/>
  <div v-else class="p-2 md:px-0 space-y-2">
    <template v-if="news.posts.length > 0">
      <template v-for="post in news.posts">
        <news-item :post_data="post"/>
      </template>
      <u-button v-if="news.page!==news.lastPage" block label="Загрузить больше" @click="news.loadMore()"/>
    </template>
    <div v-else>
      <div class="bg-white h-20 dark:bg-gray-900 rounded-xl p-2 items-center justify-center flex">
        <div class="text-sm text-gray-500">
          Здесь пока нет записей.
        </div>
      </div>
    </div>
  </div>
</template>

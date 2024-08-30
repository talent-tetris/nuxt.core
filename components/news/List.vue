<script setup>
const news = useNewsStore();
onMounted(() => {
  news.getPosts()
})
</script>

<template>
  <NewsSkeleton v-if="news.pending && !news.isLoaded"/>
  <div v-else class="p-2 md:px-0 space-y-2">
    <template v-for="post in news.posts">
      <news-item :post_data="post"/>
    </template>
    <u-button block label="Загрузить больше" @click="news.loadMore()"/>
  </div>
</template>

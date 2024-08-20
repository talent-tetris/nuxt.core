<script setup>
const news = useNewsStore();
onMounted(() => {
  news.getPosts()
})
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-2">
    <template v-for="post in news.posts">
      <news-item :post_data="post"/>
    </template>
    <u-button block label="Загрузить больше" @click="news.loadMore()"/>
  </div>
</template>

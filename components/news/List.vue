<script setup>
const page = ref(1);
const lastPage = ref(1);
const posts = ref([]);
onMounted(() => {
  loadPosts();
})

const loadPosts = () => {
  useFetch('posts', {
    params: {page: page.value},
    onResponse({response}) {
      if (response.status === 200) {
        appendPosts(response._data.posts.data);
        lastPage.value = response._data.posts.last_page;
      }
    },
  })
}

const loadMore = () => {
  if (page.value + 1 <= lastPage.value) {
    page.value = page.value + 1;
    loadPosts();
  }
}
const appendPosts = (newPosts) => {
  newPosts.forEach((post) => {
    posts.value.push(post);
  });
}
</script>

<template>
  <div class="max-w-3xl mx-auto py-2 space-y-2">
    <template v-for="post in posts">
      <news-item :post_data="post"/>
    </template>
    <u-button block label="Загрузить больше" @click="loadMore()"/>
  </div>
</template>

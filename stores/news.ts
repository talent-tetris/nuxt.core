import {defineStore} from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const page = ref(1);
  const lastPage = ref(1);
  const posts = ref([]);
  const isLoaded = computed(() => posts.value.length > 0)
  const {refresh: getPosts, pending} = useFetch('posts', {
    immediate: false,
    params: {page: page},
    onResponse({response}) {
      if (response.status === 200) {
        appendPosts(response._data.posts.data);
        lastPage.value = response._data.posts.last_page;
      }
    }
  })
  const appendPosts = (newPosts) => {
    newPosts.forEach((post) => {
      posts.value.push(post);
    });
  }
  const loadMore = () => {
    if (page.value + 1 <= lastPage.value) {
      page.value = page.value + 1;
      getPosts();
    }
  }
  const refreshPosts = () => {
    page.value = 1;
    lastPage.value = 1;
    posts.value = [];
    getPosts()
  }
  const clearPosts = () => {
    page.value = 1;
    lastPage.value = 1;
    posts.value = [];
  }
  return {posts, getPosts, pending, loadMore, refreshPosts, clearPosts, page, isLoaded, lastPage}
})

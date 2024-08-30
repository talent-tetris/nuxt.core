<script setup lang="ts">
definePageMeta({layout: 'none'});
const route = useRoute()
const user = ref({})
const {refresh: getUser, pending} = useFetch<any>('user/' + route.params.username, {
  immediate: false,
  onResponse({response}) {
    if (response.status === 200) {
      user.value = response._data.user;
    }
  }
})
onMounted(() => {
  getUser()
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <ProfileSkeleton v-if="pending"/>
    <template v-else>
      <application-bar>
        <template #left>
          <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
          <div class="flex items-center">
            <u-avatar :alt="user.name" size="md"/>
            <div class="flex-1 min-w-0 ml-2">
              <div class="text-sm font-semibold truncate">{{ user.name }}</div>
              <div class="text-gray-500 text-xs font-normal truncate">{{ user.email }}</div>
            </div>
          </div>
        </template>
      </application-bar>
      <div class="max-w-3xl mx-auto py-2 px-2 md:px-0 space-y-2">
        <div v-if="user.posts.length <= 0" class="bg-white h-20 dark:bg-gray-900 rounded-xl p-2 items-center justify-center flex">
          <div class="text-sm text-gray-500">
            На стене пока нет ни одной записи.
          </div>
        </div>
        <template v-for="post in user.posts">
          <news-item :post_data="post"/>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>

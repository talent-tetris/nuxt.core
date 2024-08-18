<script setup lang="ts">
definePageMeta({layout: 'guest'})
const route = useRoute()
const user = ref({})

const {refresh: getUser} = useFetch<any>('user/' + route.params.username, {
  immediate: false,
  onResponse({response}) {
    if (response.status === 200) {
      user.value = response._data.user;
      console.log(response._data.user)
    }
  }
})
onMounted(() => {
  getUser()
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <app-application-bar>
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
    </app-application-bar>
    <div>

    </div>

    <div class="max-w-3xl mx-auto py-2 space-y-2">
      <template v-for="post in user.posts">
        <news-item :post_data="post"/>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>

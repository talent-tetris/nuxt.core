<script setup lang="ts">
const users = useUserStore();
onMounted(() => {
  users.getUsers()
})
</script>

<template>
  <app-application-bar>
    <template #left></template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-clockwise-bold"
                :loading="users.pending" @click="users.getUsers()"/>
    </template>
  </app-application-bar>
  <div class="py-2 px-2 md:px-0 max-w-3xl mx-auto">
    <div v-if="users" v-for="user in users.users">
      <nuxt-link :to="`id-${user.username}`"
                 class="flex items-center p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
        <u-avatar :alt="user.name" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="text-sm font-semibold truncate">{{ user.name }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ user.email }}
          </div>
        </div>
      </nuxt-link>
    </div>
    <div v-if="!users.pending" class="text-gray-500 text-center text-xs font-bold">{{ users.users.length }}
      пользователей
    </div>
  </div>
</template>

<style scoped>

</style>

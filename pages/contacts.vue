<script setup lang="ts">
const users = useUserStore();
onMounted(() => {
  users.getUsers()
})
</script>

<template>
  <div class="space-y-2 p-2 max-w-3xl mx-auto">
    <div v-if="users" v-for="user in users.users">
      <div class="flex items-center p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
        <u-avatar icon="i-ph-user-bold" class="bg-pink-300 text-3xl" size="lg"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">{{ user.name }}</div>
          <div class="text-gray-400 text-sm font-normal truncate">
            {{ user.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

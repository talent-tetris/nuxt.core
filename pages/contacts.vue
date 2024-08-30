<script setup lang="ts">
const users = useUserStore();
onMounted(() => {
  users.getUsers()
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <ContactsSkeleton v-if="users.pending && !users.isLoaded"/>
    <template v-else>
      <div v-for="user in users.userList">
        <ContactsItem :user="user"/>
      </div>
      <div class="text-gray-500 text-center text-xs font-bold py-2">
        {{ users.userList.length }} пользователей
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

const users = useUserStore();
onMounted(() => {
  users.getUsers()
})
</script>

<template>
  <ContactsSkeleton v-if="users.pending && !users.isLoaded"/>
  <template v-else>
    <div v-for="user in users.userList">
      <ContactsUserItem :user="user"/>
    </div>
    <div class="text-gray-500 text-center text-xs font-bold py-2">
      {{ users.userList.length }} пользователей
    </div>
  </template>
</template>

<style scoped>

</style>

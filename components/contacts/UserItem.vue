<script setup lang="ts">
const props = defineProps(["user"]);
const auth = useAuthStore();
</script>

<template>
  <nuxt-link :to="`id-${props.user.username}`"
             class="flex items-center p-2 rounded-xl hover:bg-white dark:hover:bg-gray-800">
    <u-avatar :alt="props.user.name ?? props.user.username" size="md"/>
    <div class="flex-1 min-w-0 ml-2">
      <div class="text-sm font-semibold truncate">{{ props.user.name ?? props.user.username }}</div>
      <div v-if="auth.user.id !== props.user.id" class="text-gray-500 text-xs font-normal truncate">
        {{ props.user.email || '@' + props.user.username }}
      </div>
      <div v-else class="text-primary-500 text-xs font-normal truncate">
        Опа! Кажется это вы :)
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>

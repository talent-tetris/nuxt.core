<script setup lang="ts">
const {user} = useAuthStore();
const isOpen = ref(false)
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="h-48">
      <div class="w-full h-14 p-2">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
          </div>
          <div class="flex items-center space-x-2">
            <u-button size="lg" color="gray" variant="ghost" icon="i-ph-list-bold" to="settings"/>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-2">
      <div class="rounded-b-md bg-white dark:bg-gray-900">
        <div class="relative left-1/2 -translate-x-1/2 -top-14 size-28 rounded-full bg-red-500">
          <img class="rounded-full"
               src="https://coruscating-brioche-c8806e.netlify.app/img/39a030f69c97ef48e811e5382a018464.png"/>
        </div>
        <div class="relative -top-10"  @click="isOpen = true">
          <div class="text-3xl text-center font-extrabold">
            {{ user.name }}
          </div>
          <div class="text-xl text-center text-gray-500">
            {{ user.email }}
          </div>
        </div>
        <USlideover  side="bottom" v-model="isOpen">
          <div class="p-4 flex-1">
            <div class="flex items-center space-x-2">
              <u-icon name="i-ph-at"/>
              <span class="">
                {{user.email}}
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <u-icon name="i-ph-at"/>
              <span class="text-primary-500">
                {{user.username}}
              </span>
            </div>
            <hr class="border-gray-200 dark:border-gray-800 my-2 mx-2">
          </div>
        </USlideover>
      </div>
      <div class="h-48 rounded-md bg-white dark:bg-gray-900"></div>
    </div>
  </div>
</template>

<style scoped>

</style>

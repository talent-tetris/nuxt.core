<script setup lang="ts">

</script>

<template>
  <div class="overflow-hidden h-screen">
    <application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
        <div class="flex items-center">
          <USkeleton class="h-10 w-10" :ui="{ rounded: 'rounded-full' }"/>
          <div class="space-y-2 ml-2">
            <USkeleton class="h-3.5 w-[250px]"/>
            <USkeleton class="h-3 w-[200px]"/>
          </div>
        </div>
      </template>
    </application-bar>
    <div class="max-w-3xl mx-auto py-2 px-2 md:px-0 space-y-2">
      <div class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-1/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-4/5"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-3/5"/>
          <USkeleton class="h-3.5 w-3/6"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-5/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-1/5"/>
        </div>
        <USkeleton class="h-36 w-full"/>
        <div class="flex space-x-2">
          <USkeleton class="h-36 w-1/2"/>
          <USkeleton class="h-36 w-1/2"/>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-1/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-4/5"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-3/5"/>
          <USkeleton class="h-3.5 w-3/6"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-5/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-1/5"/>
        </div>
        <USkeleton class="h-36 w-full"/>
        <div class="flex space-x-2">
          <USkeleton class="h-36 w-1/2"/>
          <USkeleton class="h-36 w-1/2"/>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-1/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-4/5"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-2/4"/>
          <USkeleton class="h-3.5 w-3/5"/>
          <USkeleton class="h-3.5 w-3/6"/>
        </div>
        <div class="flex space-x-2">
          <USkeleton class="h-3.5 w-5/6"/>
          <USkeleton class="h-3.5 w-3/4"/>
          <USkeleton class="h-3.5 w-1/4"/>
          <USkeleton class="h-3.5 w-1/5"/>
        </div>
        <USkeleton class="h-36 w-full"/>
        <div class="flex space-x-2">
          <USkeleton class="h-36 w-1/2"/>
          <USkeleton class="h-36 w-1/2"/>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>

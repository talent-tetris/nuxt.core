<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <u-button size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold" @click="isOpen = true"/>
  <u-slideover v-model="isOpen">
    <app-application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
      </template>
      <template #right>
        <u-button size="lg" color="gray" variant="ghost" label="Опубликовать"
                  @click="useToast().add({title:'Добавление публикации в разработке!'})"/>
      </template>
    </app-application-bar>
    <hr class="border-gray-200 dark:border-gray-800 mx-2">
    <div class="h-full flex flex-col p-4 gap-2">
      <UTextarea
        :padded="false"
        placeholder="Что интересного расскажете?"
        variant="none"
        size="xl"
        :ui="{wrapper:'h-full',base:'h-full',size:{xl:'text-xl'}}"
        class="w-full text-xl"
      />
      <div>
        <u-button size="xl" color="white" variant="solid" icon="i-ph-image-square-bold"/>
      </div>
    </div>
  </u-slideover>
</template>

<style scoped>

</style>

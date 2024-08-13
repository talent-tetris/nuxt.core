<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-ph-sun-fill' : 'i-ph-moon-fill'"
      size="xl"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      :label="isDark ? 'Переключить на дневную тему' : 'Переключить на ночную тему'"
      @click="isDark = !isDark"
      block
      class="justify-start"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

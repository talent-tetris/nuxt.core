<template>
  <ClientOnly>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 px-2">
      <div v-for="color in primaryColors" :class="color.value === primary.value ? 'bg-gray-100 dark:bg-gray-800' : ''"
           class="rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1.5"
           @click="primary = color">
        <div class="flex gap-2">
          <div class="w-4 rounded-l-md" :style="{ backgroundColor: color.hex }"/>
          {{ color.value }}
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({
  value: color,
  text: color,
  hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
})))
const primary = computed({
  get() {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set(option) {
    appConfig.ui.primary = option.value
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
  }
})
</script>

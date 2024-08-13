<template>

  <div class="grid grid-cols-5 gap-2  px-2">
    <AppearanceColorPickerPill v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary"
                               @select="primary = color"/>
    </div>
<!--  <div class="grid grid-cols-5 gap-px">-->
<!--    <AppearanceColorPickerPill v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary"-->
<!--                               @select="primary = color"/>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

// Computed

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

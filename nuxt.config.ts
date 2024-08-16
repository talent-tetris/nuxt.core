export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxt/ui', 'dayjs-nuxt', '@pinia/nuxt'],
  app: {
    head: {bodyAttrs: {class: 'bg-gray-50 dark:bg-gray-950'}},
  },
  ui: {
    global: true,
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'system-color-mode',
  },
  dayjs: {
    locales: ['ru'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'ru',
    defaultTimezone: 'UTC',
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL || 'https://dev-employee.buhe.su',
      apiPrefix: '/api',
    },
  },
})

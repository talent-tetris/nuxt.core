export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxt/ui', 'dayjs-nuxt', '@pinia/nuxt', "@vite-pwa/nuxt"],
  app: {
    head: {bodyAttrs: {class: 'bg-gray-50 dark:bg-gray-950 select-none'}},
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
  pwa: {
    manifest: {
      name: 'Glitch',
      short_name: 'Glitch',
      description: "Testing Glitch PWA",
      display: 'fullscreen',
      icons: [
        {
          "src": "icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})

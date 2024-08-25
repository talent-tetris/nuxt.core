import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()

  const user = ref({});
  const access_token = useCookie('access_token', {
    path: '/',
    sameSite: 'strict',
    secure: config.public.apiBase.startsWith('https://'),
    maxAge: 60 * 60 * 24 * 365
  })
  const logged = computed(() => !!access_token.value)

  const {refresh: logout} = useFetch<any>('logout', {
    method: 'POST',
    immediate: false,
    onResponse({response}) {
      if (response.status === 200) {
        access_token.value = ''
        user.value = {}

        nuxtApp.runWithContext(() => {
          return navigateTo('/');
        })
      }
    }
  })

  const {refresh: fetchUser} = useFetch<any>('me', {
    immediate: false,
    onResponse({response}) {
      if (response.status === 200) {
        user.value = response._data.user
      }
    }
  })

  return {user, logged, logout, fetchUser, access_token}
})

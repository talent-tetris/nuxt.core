export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()
  const auth = useAuthStore()
  if (to?.name !== 'change-password') {
    if (auth.logged && auth.user.password_expired) {
      return nuxtApp.runWithContext(() => {
        useToast().add({
          icon: "i-heroicons-exclamation-circle-solid",
          title: "Необходимо сменить пароль.",
          color: "red",
        });

        return navigateTo('/change-password')
      })
    }
  }
})

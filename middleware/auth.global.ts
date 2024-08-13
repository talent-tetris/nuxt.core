export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (auth.logged && to?.name === 'login') {
    return navigateTo('/');
  }
  if (!auth.logged && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
});

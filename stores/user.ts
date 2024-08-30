import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', () => {

  const userList = ref([]);
  const isLoaded = computed(() => userList.value.length > 0)

  const {refresh: getUsers, pending} = useFetch<any>('user', {
    immediate: false,
    onResponse({response}) {
      if (response.status === 200) {
        userList.value = response._data.users
      }
    }
  })
  return {userList, getUsers, pending, isLoaded}
})

import {defineStore} from 'pinia'

export const useUserStore = defineStore('users', () => {

  const users = ref([]);

  const {refresh: getUsers} = useFetch<any>('user', {
    immediate: false,
    onResponse({response}) {
      if (response.status === 200) {
        users.value = response._data.users.data
      }
    }
  })

  return {users, getUsers}
})

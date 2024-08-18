import {defineStore} from 'pinia'

export const useDevicesStore = defineStore('devices', () => {

  const devices = ref([]);

  const {refresh: getDevices, pending} = useFetch<any>('devices', {
    immediate: false,
    onResponse({response}) {
      if (response.status === 200) {
        devices.value = response._data.devices
      }
    }
  })
  return {devices, getDevices, pending}
})

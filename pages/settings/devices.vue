<script lang="ts" setup>
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Устройства'})
const dayjs = useDayjs();

const {data, status, refresh} = useFetch<any>("devices");
const loading = computed(() => status.value === 'pending');

const menu = (row: any) => [
  [
    {
      label: "Отключить сеанс",
      icon: "i-ph-plugs-fill",
      click: async () => {
        await $fetch<any>("devices/disconnect", {
          method: "POST",
          body: {
            hash: row.hash,
          },
          async onResponse({response}) {
            if (response._data?.status) {
              refresh()
            }
          }
        });
      },
    },
  ],
];
</script>
<template>
  <application-bar>
    <template #left>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Устройства</div>
    </template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-clockwise-bold"
                @click="refresh"/>
    </template>
  </application-bar>

  <div class="max-w-3xl mx-auto space-y-2 py-2 px-2 md:px-0">
    <div v-if="data?.devices" class="bg-white dark:bg-gray-900 rounded-md">
      <div class="px-3.5 py-2 font-semibold">Это устройство</div>
      <template v-for="device in data?.devices">
        <div class="px-2 pb-2" v-if="device.is_current">
          <div class="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <u-avatar icon="i-ph-devices" class="text-3xl" size="lg"/>
            <div class="flex-1 min-w-0 ml-2">
              <div class="font-semibold truncate">
                {{ device.name }}
              </div>
              <div class="text-gray-400 text-sm font-normal truncate">
                {{ device.ip }} : <span class="text-primary-500">{{ dayjs(device.last_used_at).fromNow() }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-if="data?.devices" class="bg-white dark:bg-gray-900 rounded-md">
      <div class="px-3.5 py-2 font-semibold">Активные сеансы</div>
      <template v-for="device in data?.devices">
        <div class="px-2 pb-2">
          <UDropdown UDropdown :items="menu(device)" :ui="{ wrapper: 'flex' }"
                     class="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <u-avatar icon="i-ph-devices" class="text-3xl" size="lg"/>
            <div class="flex-1 min-w-0 ml-2">
              <div class="font-semibold truncate">
                {{ device.name }}
              </div>
              <div class="text-gray-400 text-sm font-normal truncate">
                {{ device.ip }} : <span class="text-primary-500">{{ dayjs(device.last_used_at).fromNow() }}</span>
              </div>
            </div>
          </UDropdown>
        </div>
      </template>
    </div>
  </div>
</template>

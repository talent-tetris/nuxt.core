<script setup lang="ts">
definePageMeta({
  layout: 'guest'
});

const auth = useAuthStore();
const dayjs = useDayjs();
const {data, status, refresh} = useFetch<any>("devices");
const loading = computed(() => status.value === 'pending');

const menu = (row: any) => [
  [
    {
      label: "Отключить сеанс",
      icon: "i-heroicons-trash-20-solid",
      click: async () => {
        await $fetch<any>("devices/disconnect", {
          method: "POST",
          body: {
            hash: row.hash,
          },
          async onResponse({response}) {
            if (response._data?.ok) {
              await refresh();
              await auth.fetchUser();
            }
          }
        });
      },
    },
  ],
];

</script>

<template>
  <div v-if="loading" class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
    <u-icon class="w-8 h-8 text-gray-500 dark:text-gray-500 animate-spin" name="i-ph-circle-notch-bold"></u-icon>
  </div>
  <div v-else>
    <app-application-bar>
      <template #left>
        <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
        <div class="text-lg font-bold">Устройства</div>
      </template>
      <template #right>
        <u-button :loading="loading" size="lg" color="gray" variant="ghost" icon="i-ph-arrow-clockwise-bold"
                  @click="refresh"/>
      </template>
    </app-application-bar>

    <div class="max-w-3xl mx-auto space-y-2 p-2">
      <div class="bg-white dark:bg-gray-900 rounded-md">
        <div class="px-3.5 py-2 font-semibold">Это устройство</div>
        <div v-for="device in data?.devices" class="px-2 pb-2">
          <div v-if="device.is_current"
               class="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
            <u-avatar icon="i-ph-devices" class="bg-primary-300 text-3xl" size="lg"/>
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
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-md">
        <div class="px-3.5 py-2 font-semibold">Активные сеансы</div>
        <div v-for="device in data?.devices" class="px-2 pb-2">

          <UDropdown :items="menu(device)" :ui="{ wrapper: 'flex' }">
            <div class="w-full flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <u-avatar icon="i-ph-devices" class="bg-primary-300 text-3xl" size="lg"/>
              <div class="flex-1 min-w-0 ml-2">
                <div class="font-semibold truncate">
                  {{ device.name }}
                </div>
                <div class="text-gray-400 text-sm font-normal truncate">
                  {{ device.ip }} : <span class="text-primary-500">{{ dayjs(device.last_used_at).fromNow() }}</span>
                </div>
              </div>
            </div>
          </UDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

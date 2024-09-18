<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();
const form = ref();

const state = reactive({
  username: '',
  password: '',
  remember: false,
});

const {refresh: onSubmit, status: loginStatus} = useFetch<any>('login', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
  async onResponse({response}) {
    if (response?.status === 422) {
      form.value.setErrors(response._data?.errors);
    } else if (response._data?.status) {
      auth.token = response._data.token;
      await auth.fetchUser();
      await router.push("/");
    }
  }
});

async function handleMessage(event: { data: any }): Promise<void> {
  if (event.data.message) {
    useToast().add({
      icon: "i-ph-info-bold",
      color: "red",
      title: event.data.message,
    });
  }
}

onMounted(() => window.addEventListener("message", handleMessage));
onBeforeUnmount(() => window.removeEventListener("message", handleMessage));
</script>

<template>
  <UForm ref="form" :state="state" @submit="onSubmit" class="space-y-4">
    <UFormGroup name="username" required>
      <u-input type="text" size="xl" trailing placeholder="Логин" v-model="state.username" autofocus/>
    </UFormGroup>
    <UFormGroup name="password" required>
      <u-input type="password" autocomplete="current-password" size="xl" placeholder="Пароль" v-model="state.password"/>
    </UFormGroup>

    <UTooltip text="на один месяц" :popper="{ placement: 'right' }">
      <UCheckbox v-model="state.remember" label="Запомнить меня"/>
    </UTooltip>

    <div class="space-y-2">
      <u-button block size="xl" color="primary" class="text-white" variant="solid" label="Авторизоваться" type="submit"
                :loading="loginStatus === 'pending'"/>
      <LoginHelp/>
    </div>
  </UForm>
</template>

<style scoped>

</style>

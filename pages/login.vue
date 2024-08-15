<script setup lang="ts">

definePageMeta({
  layout: 'guest',
});
const router = useRouter();
const auth = useAuthStore();
const form = ref();


const state = reactive({
  email: "",
  password: "",
  remember: false,
});

const {refresh: onSubmit, status: loginStatus} = useFetch<any>("login", {
  method: "POST",
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
      icon: "i-heroicons-exclamation-circle-solid",
      color: "red",
      title: event.data.message,
    });
  }
}

onMounted(() => window.addEventListener("message", handleMessage));
onBeforeUnmount(() => window.removeEventListener("message", handleMessage));
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-6">
      <div class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
        Добрый день! Введите авторизационные данные для входа
      </div>
      <UForm ref="form" :state="state" @submit="onSubmit" class="space-y-4">

        <UFormGroup name="email" required>
          <u-input
            type="email"
            size="xl"
            trailing
            placeholder="Электронная почта"
            v-model="state.email"
            autofocus
          />
        </UFormGroup>
        <UFormGroup name="password" required>
          <u-input
            type="password"
            autocomplete="current-password"
            size="xl"
            placeholder="Пароль"
            v-model="state.password"
          />
        </UFormGroup>

        <UTooltip text="for 1 month" :popper="{ placement: 'left' }">
          <UCheckbox v-model="state.remember" label="Запомнить меня"/>
        </UTooltip>

        <u-button
          block
          size="xl"
          color="primary"
          class="text-white"
          variant="solid"
          label="Авторизоваться"
          type="submit"
          :loading="loginStatus === 'pending'"
        />
      </UForm>

      <!--      <UForm :validate="validate" :state="state" class="space-y-4" @submit="login">-->
      <!--        <UFormGroup name="username">-->
      <!--          <u-input-->
      <!--            type="text"-->
      <!--            autocomplete="username"-->
      <!--            size="xl"-->
      <!--            placeholder="Логин"-->
      <!--            v-model="state.username"-->
      <!--          />-->
      <!--        </UFormGroup>-->

      <!--        <UFormGroup name="password">-->
      <!--          <u-input-->
      <!--            type="password"-->
      <!--            autocomplete="current-password"-->
      <!--            size="xl"-->
      <!--            placeholder="Пароль"-->
      <!--            v-model="state.password"-->
      <!--          />-->
      <!--        </UFormGroup>-->
      <!--        <u-button-->
      <!--          block-->
      <!--          size="xl"-->
      <!--          color="primary"-->
      <!--          class="text-white"-->
      <!--          variant="solid"-->
      <!--          label="Авторизоваться"-->
      <!--          type="submit"-->
      <!--        />-->
      <!--      </UForm>-->
      <!--      <u-button-->
      <!--        block-->
      <!--        size="xl"-->
      <!--        variant="soft"-->
      <!--        label="Забыли пароль?"-->
      <!--        @click="isOpen = true"-->
      <!--      />-->
      <!--      <u-modal v-model="isOpen">-->
      <!--        <div class="px-4 py-3 flex items-center space-x-4">-->
      <!--          <u-button-->
      <!--            color="gray"-->
      <!--            variant="ghost"-->
      <!--            icon="i-ph-x-bold"-->
      <!--            @click="isOpen = false"-->
      <!--          />-->
      <!--          <div>Помощь для входа</div>-->
      <!--        </div>-->
      <!--        <u-divider/>-->
      <!--        <div class="px-4 py-3">-->
      <!--          <div-->
      <!--            class="relative overflow-hidden rounded border border-dashed border-gray-400 dark:border-gray-500 opacity-75 px-4 flex items-center justify-center h-32">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </u-modal>-->
    </div>
  </div>
</template>

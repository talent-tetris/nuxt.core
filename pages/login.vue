<script setup lang="ts">

definePageMeta({
  layout: 'guest',
});
const router = useRouter();
const auth = useAuthStore();
const form = ref();
const isOpen = ref(false);


const state = reactive({
  username: '',
  password: '',
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

        <UFormGroup name="username" required>
          <u-input
            type="text"
            size="xl"
            trailing
            placeholder="Логин"
            v-model="state.username"
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

        <UTooltip text="на один месяц" :popper="{ placement: 'right' }">
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

        <u-button
          block
          size="xl"
          variant="soft"
          label="Забыли пароль?"
          @click="isOpen = true"
        />

        <u-modal v-model="isOpen">
          <div class="px-4 py-3 flex items-center space-x-4">
            <u-button
              color="gray"
              variant="ghost"
              icon="i-ph-x-bold"
              @click="isOpen = false"
            />
            <div>Как получить доступ на сайт</div>
          </div>
          <u-divider/>
          <div class="px-4 py-3">
            <ul class="space-y-8">
              <li class="space-y-2">
                <div class="font-bold">Шаг 1. Написать владельцу сайта</div>
                <div class="flex gap-4">
                  <div class="p-2 bg-purple-300 size-12 rounded-xl text-2xl">🐦</div>
                  <div class="text-sm">
                    Просто<a href="https://t.me/thatoranzhevyy" target="_blank"
                             class="text-primary-500 px-1 rounded-md hover:bg-primary-200/20">напиши владельцу сайта в
                    Telegram</a>и попроси у него доступ на сайт. Он добрый малый, уверен он поделиться доступом. Не
                    забудь с ним поздороваться, не надо забывать о вежливости.
                  </div>
                </div>
              </li>
              <li class="space-y-2">
                <div class="font-bold">Шаг 2. Попробовать зайти на сайт</div>
                <div class="flex gap-4">
                  <div class="p-2 bg-blue-300 size-12 rounded-xl text-2xl">👍</div>
                  <div class="text-sm">
                    Если вам повезло и вы получили логин и пароль на сайт, введите данные в приложения и заходите.
                  </div>
                </div>
              </li>
              <div class="bg-white dark:bg-gray-800 p-2 rounded-xl space-y-2">
                <div class="text-sm font-bold">И еще кое-что...</div>
                <div class="text-sm">
                  Постарайтесь не ломать сайт. Разработчик старается делать удобный инструмент, но если вы нашли какие
                  нибудь недочеты или баги, сообщите, пожалуйста, разработчику.
                </div>
              </div>
            </ul>

          </div>
        </u-modal>
      </UForm>
    </div>
  </div>
</template>

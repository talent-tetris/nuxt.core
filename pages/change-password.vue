<script setup lang="ts">
definePageMeta({layout: 'none'});
const form = ref();
const auth = useAuthStore();
const router = useRouter();

const state = reactive({
  current_password: "",
  password: "",
  password_confirmation: "",
});

const {refresh: onSubmit, status: accountPasswordStatus} = useFetch("account/password", {
  method: "POST",
  body: state,
  immediate: false,
  watch: false,
  async onResponse({response}) {
    if (response?.status === 422) {
      form.value.setErrors(response._data?.errors);
    } else if (response._data?.status) {
      useToast().add({
        icon: "i-heroicons-check-circle-20-solid",
        title: "Пароль был успешно обновлен.",
        color: "emerald",
      });
      state.current_password = "";
      state.password = "";
      state.password_confirmation = "";

      await auth.fetchUser();
      await router.push("/");
    }
  }
});
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-4">
      <div>
        <u-button size="sm" color="gray" variant="solid" label="Назад"
                  @click="$router.back()"/>
      </div>
      <div class="text-4xl xl:text-5xl font-extrabold">
        Изменение пароля
      </div>
      <div>
        Пароль должен содержать не менее 6 символов, включая цифры, буквы и специальные символы (!$@%).
      </div>
      <UForm
        ref="form"
        :state="state"
        @submit="onSubmit"
        class="space-y-4"
      >
        <UFormGroup label="Текущий пароль" name="current_password" required>
          <UInput v-model="state.current_password" type="password" size="xl" autocomplete="off"/>
        </UFormGroup>

        <UFormGroup
          label="Новый пароль"
          name="password"
          hint="min 8 characters"
          :ui="{ hint: 'text-xs text-gray-500 dark:text-gray-400' }"
          required
        >
          <UInput v-model="state.password" type="password" size="xl" autocomplete="off"/>
        </UFormGroup>

        <UFormGroup label="Введите новый пароль ещё раз" name="password_confirmation" required>
          <UInput
            v-model="state.password_confirmation"
            type="password"
            size="xl"
            autocomplete="off"
          />
        </UFormGroup>

        <div class="pt-2">
          <u-button block size="xl" color="primary" class="text-white" variant="solid" label="Сменить пароль"
                    :loading="accountPasswordStatus === 'pending'"
                    type="submit"/>
        </div>
      </UForm>
    </div>
  </div>
</template>

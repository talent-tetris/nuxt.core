<script setup lang="ts">
const props = defineProps(["modelValue", "entity", "accept", "maxSize", "width", "height"]);
const emit = defineEmits(["update:modelValue"]);

const images = ref([])
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const deleteImage = (index) => {
  props.modelValue.splice(index, 1);
  images.value.splice(index, 1);
}
const uploadImage = (files) => {
  if (files.length > 5) {
    useToast().add({
      title: 'Максимальное количество фото: 5',
      icon: 'i-heroicons-exclamation-circle-solid',
      color: 'red',
    })
    files.preventDefault();
  }
  Object.keys(files).forEach(i => {
    props.modelValue.push(files[i]);
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push(e.target.result);
    }
    reader.readAsDataURL(file);
  })
}
</script>
<template>
  <div class="space-y-2">
    <div class="max-w-xl whitespace-nowrap overflow-x-auto flex space-x-2 pt-2">
      <div v-for="(image, index) in images" class="relative flex">
        <img :alt="'Файл ' + index" :src="image" class="rounded h-44 max-w-7xl"/>
        <UButton
          class="absolute top-0 end-0 -m-2"
          type="button"
          color="gray"
          icon="i-ph-x"
          size="2xs"
          @click="deleteImage(index)"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>

    </div>
    <UButton onclick="document.getElementById('fileInput').click()" color="gray" variant="solid"
             label="Выберите фотографии" icon="i-heroicons-folder" block class="justify-start"/>
    <UInput id="fileInput" type="file" accept="image/jpeg" class="hidden" @change="uploadImage"
            multiple/>
  </div>
</template>


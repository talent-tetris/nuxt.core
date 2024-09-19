<script setup lang="ts">
const props = defineProps({
  galleryID: {},
  imagesData: {},
});
const config = useRuntimeConfig()
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

let lightbox = null;
onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + 'post_' + props.galleryID,
      children: 'a',
      zoom: false,
      loop: false,
      bgOpacity: 1,
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});

</script>

<template>
  <div :id="`post_${props.galleryID}`" class="max-w-full whitespace-nowrap overflow-x-auto flex space-x-2">
    <a v-for="(image, key) in imagesData"
       :key="key"
       :href="`${config.public.apiBase}/storage/${image.file_path}/${image.file_name}`"
       :data-pswp-width="image.width"
       :data-pswp-height="image.height"
       target="_blank"
       rel="noreferrer">
      <img class="rounded"
           :class="imagesData.length <= 1? 'max-w-full' : 'max-w-7xl h-44'"
           :src="`${config.public.apiBase}/storage/${image.file_path}/${image.file_name}`">
    </a>
  </div>
</template>

<style scoped></style>


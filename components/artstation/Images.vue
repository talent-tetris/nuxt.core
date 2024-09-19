<script setup>
const props = defineProps({
  galleryID: {},
  imagesData: {},
});
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

let lightbox = null;
onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
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
  <div :id="galleryID" class="whitespace-nowrap overflow-x-auto flex space-x-2">
    <a v-for="(image, key) in imagesData"
       :key="key"
       :href="image.image_url"
       :data-pswp-width="image.width"
       :data-pswp-height="image.height"
       target="_blank"
       rel="noreferrer">
      <img class="rounded"
           :class="imagesData.length <= 1? 'max-w-full' : 'max-w-7xl h-44'"
           :src="image.image_url" :alt="image.asset_id">
    </a>
  </div>
</template>

<style scoped></style>

